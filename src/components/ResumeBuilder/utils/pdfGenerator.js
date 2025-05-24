import jsPDF from 'jspdf';

const addText = (doc, text, x, y, options = {}) => {
  doc.text(text, x, y, options);
  const textHeight = doc.getTextDimensions(text, { fontSize: doc.getFontSize() }).h;
  return y + textHeight;
};

const addWrappedText = (doc, text, x, y, maxWidth, lineHeight = 4) => {
  if (!text) return y;
  const textLines = doc.splitTextToSize(text, maxWidth);
  textLines.forEach((line, index) => {
    doc.text(line, x, y + index * lineHeight);
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

  const sectionTitleHeight = doc.getTextDimensions(title, { fontSize: 16 }).h + 3 + 5;

  if (yPosition + sectionTitleHeight > doc.internal.pageSize.getHeight() - margin) {
    doc.addPage();
    yPosition = margin;
  }

  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  yPosition = addText(doc, title, margin, yPosition);
  yPosition += 3;

  doc.setLineWidth(0.5);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 5;

  doc.setFont('helvetica', 'normal');

  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      const estimatedItemHeight = 40;

      if (yPosition + estimatedItemHeight > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        yPosition = margin;
      }
      yPosition = renderItem(doc, item, yPosition, margin, pageWidth, contentWidth);
      yPosition += 5;
    });
  } else {
    const estimatedItemHeight = 60;

    if (yPosition + estimatedItemHeight > doc.internal.pageSize.getHeight() - margin) {
      doc.addPage();
      yPosition = margin;
    }
    yPosition = renderItem(doc, data, yPosition, margin, pageWidth, contentWidth);
    yPosition += 5;
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

    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    yPosition = addText(
      doc,
      `${resumeData.basicInfo.firstName} ${resumeData.basicInfo.lastName}`,
      pageWidth / 2,
      yPosition,
      { align: 'center' },
    );
    yPosition += 8;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const contactItems = [];
    if (resumeData.basicInfo.email) contactItems.push(resumeData.basicInfo.email);
    if (resumeData.basicInfo.phoneNumber) contactItems.push(resumeData.basicInfo.phoneNumber);

    const contactText = contactItems.join(' | ');
    const contactTextLines = doc.splitTextToSize(contactText, contentWidth);
    let contactY = yPosition;
    contactTextLines.forEach((line, index) => {
      doc.text(line, pageWidth / 2, contactY + index * 4, { align: 'center' });
    });
    yPosition = contactY + contactTextLines.length * 4;
    yPosition += 3;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const linkItems = [];
    if (resumeData.basicInfo.linkedinLink) linkItems.push(`LinkedIn: ${resumeData.basicInfo.linkedinLink}`);
    if (resumeData.basicInfo.githubLink) linkItems.push(`GitHub: ${resumeData.basicInfo.githubLink}`);

    const linkText = linkItems.join(' | ');
    const linkTextLines = doc.splitTextToSize(linkText, contentWidth);
    let linkY = yPosition;
    linkTextLines.forEach((line, index) => {
      doc.text(line, pageWidth / 2, linkY + index * 4, { align: 'center' });
    });
    yPosition = linkY + linkTextLines.length * 4;

    yPosition += 8;

    yPosition = renderSection(
      doc,
      yPosition,
      margin,
      pageWidth,
      contentWidth,
      'Skills',
      resumeData.skills,
      (doc, skills, y, margin, pageWidth, contentWidth) => {
        doc.setFontSize(12);
        let currentY = y;
        const skillCategories = [
          { title: 'Languages', content: skills.languages },
          { title: 'Frameworks', content: skills.frameworks },
          { title: 'Developer Tools', content: skills.developerTools },
          { title: 'Database', content: skills.database },
        ];

        skillCategories.forEach((category) => {
          if (category.content) {
            const titleHeight = doc.getTextDimensions(`${category.title}:`, { fontSize: 12, fontStyle: 'bold' }).h;
            const contentLines = doc.splitTextToSize(category.content, contentWidth).length;
            const contentHeight = contentLines * 4;
            const estimatedHeight = titleHeight + 3 + contentHeight + 8;

            if (currentY + estimatedHeight > doc.internal.pageSize.getHeight() - margin) {
              doc.addPage();
              currentY = margin;
            }

            doc.setFont('helvetica', 'bold');
            currentY = addText(doc, `${category.title}:`, margin, currentY);
            currentY += 3;

            doc.setFont('helvetica', 'normal');
            currentY = addWrappedText(doc, category.content, margin, currentY, contentWidth, 4);
            currentY += 8;
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
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        currentY = addText(doc, exp.designation, margin, currentY);
        doc.setFont('helvetica', 'normal');
        let companyLocationText = `${exp.companyName}${exp.location ? ', ' + exp.location : ''}`;
        let companyLocationY = currentY + 1;
        let companyLocationTextLines = doc.splitTextToSize(companyLocationText, contentWidth / 2);

        companyLocationTextLines.forEach((line, index) => {
          doc.text(line, margin, companyLocationY + index * 4);
        });
        currentY = companyLocationY + companyLocationTextLines.length * 4;

        doc.setFont('helvetica', 'italic');
        doc.text(exp.duration, pageWidth - margin, y + doc.getTextDimensions(exp.designation, { fontSize: 12 }).h + 1, {
          align: 'right',
        });

        doc.setFont('helvetica', 'normal');
        if (exp.workDescription) {
          currentY += 3;
          currentY = addWrappedText(doc, exp.workDescription, margin, currentY, contentWidth, 4);
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
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        currentY = addText(doc, project.title, margin, currentY);
        doc.setFont('helvetica', 'normal');

        if (project.techStacks) {
          currentY += 3;
          currentY = addWrappedText(doc, `Tech Stack: ${project.techStacks}`, margin, currentY, contentWidth, 4);
        }
        if (project.description) {
          currentY += 3;
          currentY = addWrappedText(doc, project.description, margin, currentY, contentWidth, 4);
        }
        if (project.impact) {
          currentY += 3;
          currentY = addWrappedText(doc, `Impact: ${project.impact}`, margin, currentY, contentWidth, 4);
        }
        if (project.uniqueness) {
          currentY += 3;
          currentY = addWrappedText(doc, `Unique Features: ${project.uniqueness}`, margin, currentY, contentWidth, 4);
        }

        const projectLinks = [];
        if (project.deployedLink) projectLinks.push(`Live Demo: ${project.deployedLink}`);
        if (project.githubLink) projectLinks.push(`Source Code: ${project.githubLink}`);

        if (projectLinks.length > 0) {
          currentY += 3;
          doc.setFontSize(10);
          doc.setFont('helvetica', 'italic');
          currentY = addWrappedText(doc, projectLinks.join(' | '), margin, currentY, contentWidth, 4);
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
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        currentY = addText(doc, edu.title, margin, currentY);
        doc.setFont('helvetica', 'normal');
        let schoolLocationText = `${edu.schoolName}${edu.location ? ', ' + edu.location : ''}`;
        let schoolLocationY = currentY + 1;
        let schoolLocationTextLines = doc.splitTextToSize(schoolLocationText, contentWidth / 2);

        schoolLocationTextLines.forEach((line, index) => {
          doc.text(line, margin, schoolLocationY + index * 4);
        });
        currentY = schoolLocationY + schoolLocationTextLines.length * 4;

        doc.setFont('helvetica', 'italic');
        doc.text(edu.duration, pageWidth - margin, y + doc.getTextDimensions(edu.title, { fontSize: 12 }).h + 1, {
          align: 'right',
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
      'Leadership',
      resumeData.leadership,
      (doc, lead, y, margin, pageWidth, contentWidth) => {
        let currentY = y;
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        currentY = addText(doc, lead.position, margin, currentY);
        doc.setFont('helvetica', 'normal');
        let organizationLocationText = `${lead.organizationName}${lead.location ? ', ' + lead.location : ''}`;
        let organizationLocationY = currentY + 1;
        let organizationLocationTextLines = doc.splitTextToSize(organizationLocationText, contentWidth / 2);

        organizationLocationTextLines.forEach((line, index) => {
          doc.text(line, margin, organizationLocationY + index * 4);
        });
        currentY = organizationLocationY + organizationLocationTextLines.length * 4;

        doc.setFont('helvetica', 'italic');
        doc.text(lead.duration, pageWidth - margin, y + doc.getTextDimensions(lead.position, { fontSize: 12 }).h + 1, {
          align: 'right',
        });

        doc.setFont('helvetica', 'normal');

        const leadershipDetails = [];
        if (lead.responsibilities) leadershipDetails.push(`Responsibilities: ${lead.responsibilities}`);
        if (lead.impact) leadershipDetails.push(`Impact: ${lead.impact}`);
        if (lead.additionalInfo) leadershipDetails.push(`Additional Info: ${lead.additionalInfo}`);

        if (leadershipDetails.length > 0) {
          currentY += 3;
          doc.setFontSize(10);
          currentY = addWrappedText(doc, leadershipDetails.join(' | '), margin, currentY, contentWidth, 4);
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
      'Achievements',
      resumeData.achievements,
      (doc, achievements, y, margin, pageWidth, contentWidth) => {
        let currentY = y;
        doc.setFontSize(12);
        const achievementItems = [
          achievements.achievement1,
          achievements.achievement2,
          achievements.achievement3,
          achievements.achievement4,
        ].filter((item) => item);

        if (achievementItems.length > 0) {
          achievementItems.forEach((item, index) => {
            const estimatedAchievementHeight = doc.splitTextToSize(item, contentWidth).length * 4;
            if (currentY + estimatedAchievementHeight + 3 > doc.internal.pageSize.getHeight() - margin) {
              doc.addPage();
              currentY = margin;
            }
            currentY = addWrappedText(doc, `• ${item}`, margin, currentY, contentWidth, 4);
            currentY += 5;
          });
          return currentY - 5;
        }
        return currentY;
      },
    );

    doc.save(`${resumeData.basicInfo.firstName || 'resume'}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF. Please try again.');
  } finally {
    setIsGenerating(false);
  }
};
