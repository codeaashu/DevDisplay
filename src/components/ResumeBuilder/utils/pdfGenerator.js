import jsPDF from 'jspdf';

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0];
};

const addText = (doc, text, x, y, options = {}) => {
  doc.text(text, x, y, options);
  const textHeight = doc.getTextDimensions(text, { fontSize: doc.getFontSize() }).h;
  return y + textHeight;
};

const addWrappedText = (doc, text, x, y, maxWidth, lineHeight = 3.5, linkUrl = null) => {
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
  return y + totalTextHeight;
};

const renderSection = (doc, yPosition, margin, pageWidth, contentWidth, title, data, renderItem) => {
  if (
    !data ||
    (Array.isArray(data) && data.length === 0) ||
    (typeof data === 'object' && Object.values(data).every((val) => !val))
  ) {
    return yPosition;
  }

  const sectionTitleFontSize = 14;
  const sectionTitleHeight = doc.getTextDimensions(title, { fontSize: sectionTitleFontSize }).h + 2 + 3;

  if (yPosition + sectionTitleHeight > doc.internal.pageSize.getHeight() - margin) {
    doc.addPage();
    yPosition = margin;
  }

  doc.setFontSize(sectionTitleFontSize);
  doc.setFont('helvetica', 'bold');
  yPosition = addText(doc, title, margin, yPosition);

  doc.setDrawColor(150);
  doc.setLineWidth(0.5);
  doc.line(margin, yPosition, margin + contentWidth, yPosition); // draw line under title

  yPosition += 4; // uniform gap after the line

  doc.setLineWidth(0.5);

  yPosition += 6; // more breathing space

  doc.setFont('helvetica', 'normal');

  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      const estimatedItemHeight = 25;

      if (yPosition + estimatedItemHeight > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        yPosition = margin;
      }
      yPosition = renderItem(doc, item, yPosition, margin, pageWidth, contentWidth);
      yPosition += 3;
    });
  } else {
    const estimatedItemHeight = 35;

    if (yPosition + estimatedItemHeight > doc.internal.pageSize.getHeight() - margin) {
      doc.addPage();
      yPosition = margin;
    }
    yPosition = renderItem(doc, data, yPosition, margin, pageWidth, contentWidth);
    yPosition += 3;
  }

  return yPosition;
};
export const generateResumePdf = (resumeData, setIsGenerating) => {
  setIsGenerating(true);

  try {
    const doc = new jsPDF('p', 'mm', 'a4');
    const margin = 10;
    let yPosition = margin;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - 2 * margin;

    const bodyFontSize = 10;
    const wrappedLineHeight = 3.5;
    const linkColorHex = '#007bff';
    const rgbLinkColor = hexToRgb(linkColorHex);

    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    yPosition = addText(
      doc,
      `${resumeData.basicInfo.firstName} ${resumeData.basicInfo.lastName}`,
      pageWidth / 2,
      yPosition,
      { align: 'center' },
    );
    yPosition += 5;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    const contactItems = [];
    if (resumeData.basicInfo.email) contactItems.push(resumeData.basicInfo.email);
    if (resumeData.basicInfo.phoneNumber) contactItems.push(resumeData.basicInfo.phoneNumber);

    const contactText = contactItems.join(' | ');
    const contactTextLines = doc.splitTextToSize(contactText, contentWidth);
    let contactY = yPosition;
    contactTextLines.forEach((line, index) => {
      doc.text(line, pageWidth / 2, contactY + index * 3.5, { align: 'center' });
    });
    yPosition = contactY + contactTextLines.length * 3.5;
    yPosition += 2;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
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
    yPosition = linkTextInitialY + doc.getTextDimensions('Sample', { fontSize: 9 }).h;

    yPosition += 6;

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
            const estimatedHeight = titleHeight + 1 + contentHeight + 4;

            if (currentY + estimatedHeight > doc.internal.pageSize.getHeight() - margin) {
              doc.addPage();
              currentY = margin;
            }

            doc.setFont('helvetica', 'bold');
            currentY = addText(doc, `${category.title}:`, margin, currentY);
            currentY += 1; // gap after title

            doc.setFont('helvetica', 'normal');
            currentY = addWrappedText(doc, category.content, margin, currentY, contentWidth, wrappedLineHeight);
            currentY += 4; // additional gap after content
          }
        });
        return currentY;
      },
    );

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
        doc.text(exp.duration, pageWidth - margin, y + designationTextHeight, {
          align: 'right',
        });

        doc.setFont('helvetica', 'normal');
        if (exp.workDescription) {
          currentY += 2; // gap before work description
          currentY = addWrappedText(doc, exp.workDescription, margin, currentY, contentWidth, wrappedLineHeight);
          currentY += 6; // gap after work description
        }
        return currentY;
      },
    );

    yPosition = renderSection(
      doc,
      yPosition,
      margin,
      pageWidth,
      contentWidth,
      'Projects',
      resumeData.projects,
      (doc, project, y, margin, pageWidth, contentWidth) => {
        let currentY = y;
        doc.setFontSize(bodyFontSize);
        doc.setFont('helvetica', 'bold');
        currentY = addText(doc, project.title, margin, currentY);
        doc.setFont('helvetica', 'normal');

        if (project.techStacks) {
          currentY += 2;
          currentY = addWrappedText(
            doc,
            `Tech Stack: ${project.techStacks}`,
            margin,
            currentY,
            contentWidth,
            wrappedLineHeight,
          );
        }
        if (project.description) {
          currentY += 2;
          currentY = addWrappedText(doc, project.description, margin, currentY, contentWidth, wrappedLineHeight);
        }
        if (project.impact) {
          currentY += 2;
          currentY = addWrappedText(
            doc,
            `Impact: ${project.impact}`,
            margin,
            currentY,
            contentWidth,
            wrappedLineHeight,
          );
        }
        if (project.uniqueness) {
          currentY += 2;
          currentY = addWrappedText(
            doc,
            `Unique Features: ${project.uniqueness}`,
            margin,
            currentY,
            contentWidth,
            wrappedLineHeight,
          );
        }

        const projectLinkFontSize = bodyFontSize - 1 > 7 ? bodyFontSize - 1 : 8;
        const oldFontSize = doc.getFontSize();

        if (project.deployedLink || project.githubLink) {
          currentY += 2;
          doc.setFontSize(projectLinkFontSize);
          doc.setFont('helvetica', 'italic');

          if (project.deployedLink) {
            const text = `Live Demo: ${project.deployedLink}`;
            doc.setTextColor(rgbLinkColor[0], rgbLinkColor[1], rgbLinkColor[2]);
            currentY = addWrappedText(
              doc,
              text,
              margin,
              currentY,
              contentWidth,
              wrappedLineHeight,
              project.deployedLink,
            );
            doc.setTextColor(0, 0, 0);
            currentY += 1;
          }
          if (project.githubLink) {
            const text = `Source Code: ${project.githubLink}`;
            doc.setTextColor(rgbLinkColor[0], rgbLinkColor[1], rgbLinkColor[2]);
            currentY = addWrappedText(doc, text, margin, currentY, contentWidth, wrappedLineHeight, project.githubLink);
            doc.setTextColor(0, 0, 0);
          }
          doc.setFontSize(oldFontSize);
          doc.setFont('helvetica', 'normal');
          currentY += 6; // gap after links
        }
        return currentY;
      },
    );

    yPosition = renderSection(
      doc,
      yPosition,
      margin,
      pageWidth,
      contentWidth,
      'Education',
      resumeData.education,
      (doc, edu, y, margin, pageWidth, contentWidth) => {
        let currentY = y;
        doc.setFontSize(bodyFontSize);
        doc.setFont('helvetica', 'bold');
        const titleTextHeight = doc.getTextDimensions(edu.title, { fontSize: doc.getFontSize() }).h;
        currentY = addText(doc, edu.title, margin, currentY);

        doc.setFont('helvetica', 'normal');
        let schoolLocationText = `${edu.schoolName}${edu.location ? ', ' + edu.location : ''}`;
        let schoolLocationY = currentY + 0.5;
        let schoolLocationTextLines = doc.splitTextToSize(schoolLocationText, contentWidth / 2);

        schoolLocationTextLines.forEach((line, index) => {
          doc.text(line, margin, schoolLocationY + index * wrappedLineHeight);
        });
        currentY = schoolLocationY + schoolLocationTextLines.length * wrappedLineHeight;

        doc.setFont('helvetica', 'italic');
        doc.text(edu.duration, pageWidth - margin, y + titleTextHeight, {
          align: 'right',
        });
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(bodyFontSize);
        currentY += 6; // gap before description

        return currentY;
      },
    );

    yPosition = renderSection(
      doc,
      yPosition,
      margin,
      pageWidth,
      contentWidth,
      'Leadership',
      resumeData.leadership,
      (doc, lead, y, margin, pageWidth, contentWidth) => {
        let currentY = y;
        doc.setFontSize(bodyFontSize);
        doc.setFont('helvetica', 'bold');
        const positionTextHeight = doc.getTextDimensions(lead.position, { fontSize: doc.getFontSize() }).h;
        currentY = addText(doc, lead.position, margin, currentY);

        doc.setFont('helvetica', 'normal');
        let organizationLocationText = `${lead.organizationName}${lead.location ? ', ' + lead.location : ''}`;
        let organizationLocationY = currentY + 0.5;
        let organizationLocationTextLines = doc.splitTextToSize(organizationLocationText, contentWidth / 2);

        organizationLocationTextLines.forEach((line, index) => {
          doc.text(line, margin, organizationLocationY + index * wrappedLineHeight);
        });
        currentY = organizationLocationY + organizationLocationTextLines.length * wrappedLineHeight;

        doc.setFont('helvetica', 'italic');
        doc.text(lead.duration, pageWidth - margin, y + positionTextHeight, {
          align: 'right',
        });

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(bodyFontSize);

        currentY += 2;
        let detailsAdded = false;
        if (lead.responsibilities) {
          currentY = addWrappedText(
            doc,
            `Responsibilities: ${lead.responsibilities}`,
            margin,
            currentY,
            contentWidth,
            wrappedLineHeight,
          );
          currentY += 1.5;
          detailsAdded = true;
        }
        if (lead.impact) {
          currentY = addWrappedText(doc, `Impact: ${lead.impact}`, margin, currentY, contentWidth, wrappedLineHeight);
          currentY += 1.5;
          detailsAdded = true;
        }
        if (lead.additionalInfo) {
          currentY = addWrappedText(
            doc,
            `Additional Info: ${lead.additionalInfo}`,
            margin,
            currentY,
            contentWidth,
            wrappedLineHeight,
          );
          detailsAdded = true;
        }

        if (detailsAdded && (lead.responsibilities || lead.impact || lead.additionalInfo)) {
          if (currentY > y + 2) {
            currentY -= 1.5;
          }
        } else if (!detailsAdded) {
          currentY -= 2;
        }
        currentY += 6; // gap after leadership section
        return currentY;
      },
    );

    yPosition = renderSection(
      doc,
      yPosition,
      margin,
      pageWidth,
      contentWidth,
      'Achievements',
      resumeData.achievements,
      (doc, achievements, y, margin, pageWidth, contentWidth) => {
        let currentY = y;
        doc.setFontSize(bodyFontSize);
        const achievementItems = [
          achievements.achievement1,
          achievements.achievement2,
          achievements.achievement3,
          achievements.achievement4,
        ].filter((item) => item);

        if (achievementItems.length > 0) {
          achievementItems.forEach((item, index) => {
            const estimatedAchievementHeight = doc.splitTextToSize(item, contentWidth).length * wrappedLineHeight;
            if (currentY + estimatedAchievementHeight + 2 > doc.internal.pageSize.getHeight() - margin) {
              doc.addPage();
              currentY = margin;
            }
            currentY = addWrappedText(doc, `• ${item}`, margin, currentY, contentWidth, wrappedLineHeight);
            currentY += 2;
          });
          return currentY - 2;
        }
        // If no achievements, return currentY without adding anything
        if (currentY > y) {
          currentY -= 2; // Adjust for the last gap
        } else {
          currentY = y; // Reset to original position if no achievements
        }
        return currentY;
      },
    );

    doc.save(`${resumeData.basicInfo.firstName || 'resume'}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF. Please check console for details.');
  } finally {
    setIsGenerating(false);
  }
};
