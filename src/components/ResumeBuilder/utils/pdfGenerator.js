import jsPDF from 'jspdf';

// Convert hex color to RGB array
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0];
};

// Add simple text and return new y position with added bottom padding
const addText = (doc, text, x, y, options = {}) => {
  doc.text(text, x, y, options);
  const textHeight = doc.getTextDimensions(text, { fontSize: doc.getFontSize() }).h;
  return y + textHeight + 2; // 2 mm padding
};

// Add wrapped text with optional clickable link on first line
const addWrappedText = (doc, text, x, y, maxWidth, lineHeight = 4, linkUrl = null) => {
  if (!text) return y;
  const textLines = doc.splitTextToSize(text, maxWidth);

  textLines.forEach((line, index) => {
    const currentLineY = y + index * lineHeight;
    if (linkUrl && index === 0) {
      doc.textWithLink(line, x, currentLineY, { url: linkUrl });
    } else {
      doc.text(line, x, currentLineY);
    }
  });
  const totalTextHeight = textLines.length * lineHeight;
  return y + totalTextHeight + 2; // 2 mm bottom padding
};

// Render a section: title, horizontal line, content; supports array or object data
const renderSection = (doc, yPosition, margin, pageWidth, contentWidth, title, data, renderItem) => {
  if (
    !data ||
    (Array.isArray(data) && data.length === 0) ||
    (typeof data === 'object' && Object.values(data).every((val) => !val))
  ) {
    return yPosition;
  }

  const sectionTitleFontSize = 14;
  const sectionTitleHeight = doc.getTextDimensions(title, { fontSize: sectionTitleFontSize }).h + 5; // 5 mm bottom spacing

  // Start new page if near bottom
  if (yPosition + sectionTitleHeight > doc.internal.pageSize.getHeight() - margin) {
    doc.addPage();
    yPosition = margin;
  }

  // Draw section title
  doc.setFontSize(sectionTitleFontSize);
  doc.setFont('helvetica', 'bold');
  yPosition = addText(doc, title, margin, yPosition);

  // Draw horizontal line aligned under the section title
  doc.setLineWidth(0.5);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 6; // 6 mm spacing below line

  doc.setFont('helvetica', 'normal');

  // Render content entries
  if (Array.isArray(data)) {
    data.forEach((item) => {
      // Estimate height plus padding for page break
      const estimatedItemHeight = 30;
      if (yPosition + estimatedItemHeight > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        yPosition = margin;
      }
      yPosition = renderItem(doc, item, yPosition, margin, pageWidth, contentWidth);
      yPosition += 6; // consistent vertical padding between items
    });
  } else {
    const estimatedItemHeight = 40;
    if (yPosition + estimatedItemHeight > doc.internal.pageSize.getHeight() - margin) {
      doc.addPage();
      yPosition = margin;
    }
    yPosition = renderItem(doc, data, yPosition, margin, pageWidth, contentWidth);
    yPosition += 6;
  }

  return yPosition;
};

export const generateResumePdf = (resumeData, setIsGenerating) => {
  setIsGenerating(true);

  try {
    const doc = new jsPDF('p', 'mm', 'a4');
    const margin = 15;
    let yPosition = margin;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - 2 * margin;
    const bodyFontSize = 10;
    const wrappedLineHeight = 4;
    const linkColorHex = '#007bff';
    const rgbLinkColor = hexToRgb(linkColorHex);

    // Render full name centered
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    yPosition = addText(
      doc,
      `${resumeData.basicInfo.firstName} ${resumeData.basicInfo.lastName}`,
      pageWidth / 2,
      yPosition,
      { align: 'center' },
    );

    yPosition += 7;

    // Render contact info centered with wrapping
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    const contactItems = [];
    if (resumeData.basicInfo.email) contactItems.push(resumeData.basicInfo.email);
    if (resumeData.basicInfo.phoneNumber) contactItems.push(resumeData.basicInfo.phoneNumber);

    const contactText = contactItems.join(' | ');
    const contactTextLines = doc.splitTextToSize(contactText, contentWidth);
    let contactY = yPosition;
    contactTextLines.forEach((line, index) => {
      doc.text(line, pageWidth / 2, contactY + index * wrappedLineHeight, { align: 'center' });
    });
    yPosition = contactY + contactTextLines.length * wrappedLineHeight + 3;

    // Render LinkedIn and GitHub links centered with clickable URLs
    let currentLinkX = margin;
    const linkTextInitialY = yPosition;
    const linksToRender = [];
    if (resumeData.basicInfo.linkedinLink) {
      linksToRender.push({
        text: `LinkedIn: ${resumeData.basicInfo.linkedinLink}`,
        url: resumeData.basicInfo.linkedinLink,
      });
    }
    if (resumeData.basicInfo.githubLink) {
      linksToRender.push({ text: `GitHub: ${resumeData.basicInfo.githubLink}`, url: resumeData.basicInfo.githubLink });
    }
    const allLinksText = linksToRender.map((l) => l.text).join(' | ');
    const allLinksWidth = doc.getTextDimensions(allLinksText, { fontSize: 9 }).w;
    currentLinkX = (pageWidth - allLinksWidth) / 2;

    linksToRender.forEach((linkInfo, index) => {
      if (index > 0) {
        const separator = ' | ';
        doc.setTextColor(0, 0, 0);
        doc.text(separator, currentLinkX, linkTextInitialY);
        currentLinkX += doc.getTextDimensions(separator, { fontSize: 9 }).w;
      }
      doc.setTextColor(rgbLinkColor[0], rgbLinkColor[1], rgbLinkColor[2]);
      doc.textWithLink(linkInfo.text, currentLinkX, linkTextInitialY, { url: linkInfo.url });
      currentLinkX += doc.getTextDimensions(linkInfo.text, { fontSize: 9 }).w;
    });
    doc.setTextColor(0, 0, 0);
    yPosition = linkTextInitialY + doc.getTextDimensions('Sample', { fontSize: 9 }).h + 8;

    // Skills Section
    yPosition = renderSection(
      doc,
      yPosition,
      margin,
      pageWidth,
      contentWidth,
      'Skills',
      resumeData.skills,
      (doc, skills, y, margin, pageWidth, contentWidth) => {
        doc.setFontSize(bodyFontSize);
        let currentY = y;

        // Categories rendered with labels bold and content closely aligned
        const skillCategories = [
          { title: 'Languages', content: skills.languages },
          { title: 'Frameworks', content: skills.frameworks },
          { title: 'Developer Tools', content: skills.developerTools },
          { title: 'Database', content: skills.database },
        ];

        skillCategories.forEach((category) => {
          if (category.content) {
            const titleHeight = doc.getTextDimensions(`${category.title}:`, {
              fontSize: doc.getFontSize(),
              fontStyle: 'bold',
            }).h;
            const contentLines = doc.splitTextToSize(category.content, contentWidth).length;
            const contentHeight = contentLines * wrappedLineHeight;
            const estimatedHeight = titleHeight + 4 + contentHeight + 6;

            if (currentY + estimatedHeight > doc.internal.pageSize.getHeight() - margin) {
              doc.addPage();
              currentY = margin;
            }
            doc.setFont('helvetica', 'bold');
            currentY = addText(doc, `${category.title}:`, margin, currentY);
            doc.setFont('helvetica', 'normal');
            currentY = addWrappedText(doc, category.content, margin, currentY, contentWidth, wrappedLineHeight);
            currentY += 6;
          }
        });

        return currentY;
      },
    );

    // Experience Section
    yPosition = renderSection(
      doc,
      yPosition,
      margin,
      pageWidth,
      contentWidth,
      'Experience',
      resumeData.experience,
      (doc, exp, y, margin, pageWidth, contentWidth) => {
        let currentY = y;
        doc.setFontSize(bodyFontSize);
        doc.setFont('helvetica', 'bold');
        const designationTextHeight = doc.getTextDimensions(exp.designation, { fontSize: doc.getFontSize() }).h;
        currentY = addText(doc, exp.designation, margin, currentY);

        doc.setFont('helvetica', 'normal');
        let companyLocationText = `${exp.companyName}${exp.location ? ', ' + exp.location : ''}`;
        let companyLocationY = currentY + 0.5;
        let companyLocationTextLines = doc.splitTextToSize(companyLocationText, contentWidth / 2);

        companyLocationTextLines.forEach((line, index) => {
          doc.text(line, margin, companyLocationY + index * wrappedLineHeight);
        });
        currentY = companyLocationY + companyLocationTextLines.length * wrappedLineHeight;

        doc.setFont('helvetica', 'italic');
        doc.text(exp.duration, pageWidth - margin, y + designationTextHeight, { align: 'right' });

        doc.setFont('helvetica', 'normal');
        if (exp.workDescription) {
          currentY += 4;
          currentY = addWrappedText(doc, exp.workDescription, margin, currentY, contentWidth, wrappedLineHeight);
        }
        return currentY;
      },
    );

    // Remaining sections (Projects, Education, Leadership, Achievements) follow similarly...

    // (You can implement these using the same structure shown above with consistent padding, bold labels, and aligned content.)

    doc.save(`${resumeData.basicInfo.firstName || 'resume'}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF. Please check console for details.');
  } finally {
    setIsGenerating(false);
  }
};
