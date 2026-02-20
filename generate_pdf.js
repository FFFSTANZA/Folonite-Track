const fs = require('fs');
const path = require('path');

// Read the markdown file
const markdownContent = fs.readFileSync('FOLONITE_BUSINESS_OVERVIEW.md', 'utf8');

// Convert markdown to HTML (basic conversion)
function markdownToHtml(markdown) {
  let html = markdown;

  // Convert headers
  html = html.replace(/^# (.+)$/gm, '<h1 class="title">$1</h1>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');

  // Convert bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Convert italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Convert horizontal rules
  html = html.replace(/^---$/gm, '<hr class="divider">');

  // Convert lists
  let inList = false;
  html = html.replace(/^(\d+)\. (.+)$/gm, (match, num, text) => {
    if (!inList) {
      inList = true;
      return '<ol><li>' + text + '</li>';
    }
    return '<li>' + text + '</li>';
  });
  html = html.replace(/^[-*] (.+)$/gm, (match, text) => {
    if (!inList) {
      inList = true;
      return '<ul><li>' + text + '</li>';
    }
    return '<li>' + text + '</li>';
  });

  // Close lists
  html = html.replace(/\n\n/g, (match) => {
    if (inList) {
      inList = false;
      return '</li></ul>\n\n';
    }
    return match;
  });

  // Convert paragraphs (lines that aren't already converted)
  html = html.split('\n\n').map(para => {
    if (para.startsWith('<')) return para; // Skip if already HTML
    if (para.trim() === '') return '';
    return '<p>' + para.replace(/\n/g, '<br>') + '</p>';
  }).join('\n\n');

  // Clean up
  html = html.replace(/\n{3,}/g, '\n\n');

  return html;
}

// Create HTML document
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FOLONITE - Smart Asset Management System</title>
    <style>
        @page {
            size: A4;
            margin: 2cm;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 11pt;
            line-height: 1.6;
            color: #333;
            background: #fff;
        }

        .document {
            max-width: 21cm;
            margin: 0 auto;
            padding: 0;
        }

        .title {
            font-size: 28pt;
            color: #1a1a1a;
            text-align: center;
            margin: 24pt 0 8pt 0;
            font-weight: 700;
            letter-spacing: -0.5pt;
        }

        h2 {
            font-size: 16pt;
            color: #2563eb;
            margin: 24pt 0 12pt 0;
            padding-bottom: 6pt;
            border-bottom: 2px solid #2563eb;
            font-weight: 600;
        }

        h3 {
            font-size: 13pt;
            color: #1e40af;
            margin: 20pt 0 10pt 0;
            font-weight: 600;
        }

        h4 {
            font-size: 11pt;
            color: #374151;
            margin: 16pt 0 8pt 0;
            font-weight: 600;
        }

        p {
            margin: 8pt 0;
            text-align: justify;
            text-justify: inter-word;
        }

        .subtitle {
            font-size: 14pt;
            color: #6b7280;
            text-align: center;
            margin: 8pt 0 24pt 0;
            font-weight: 400;
        }

        .divider {
            border: none;
            border-top: 1px solid #e5e7eb;
            margin: 20pt 0;
        }

        ul, ol {
            margin: 8pt 0 8pt 24pt;
        }

        li {
            margin: 4pt 0;
        }

        strong {
            font-weight: 600;
            color: #1f2937;
        }

        em {
            font-style: italic;
            color: #4b5563;
        }

        .toc-section {
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 8pt;
            padding: 16pt;
            margin: 16pt 0 24pt 0;
        }

        .toc-section h2 {
            border-bottom: none;
            margin-top: 0;
        }

        .toc-item {
            margin: 6pt 0;
            padding-left: 12pt;
        }

        .toc-level-1 {
            font-weight: 600;
            color: #111827;
        }

        .toc-level-2 {
            padding-left: 24pt;
            font-weight: 400;
            color: #4b5563;
            font-size: 10pt;
        }

        .toc-level-3 {
            padding-left: 36pt;
            font-weight: 400;
            color: #6b7280;
            font-size: 9pt;
        }

        .section-break {
            page-break-before: always;
        }

        .no-break {
            page-break-inside: avoid;
        }

        .callout {
            background: #eff6ff;
            border-left: 4px solid #2563eb;
            padding: 12pt;
            margin: 12pt 0;
            border-radius: 0 4pt 4pt 0;
        }

        .example {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 12pt;
            margin: 12pt 0;
            border-radius: 0 4pt 4pt 0;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 12pt 0;
            font-size: 10pt;
        }

        th, td {
            border: 1px solid #d1d5db;
            padding: 8pt 12pt;
            text-align: left;
        }

        th {
            background: #f9fafb;
            font-weight: 600;
            color: #1f2937;
        }

        tr:nth-child(even) {
            background: #f9fafb;
        }

        .footer {
            margin-top: 36pt;
            padding-top: 12pt;
            border-top: 1px solid #e5e7eb;
            font-size: 9pt;
            color: #6b7280;
            text-align: center;
        }

        .footer a {
            color: #2563eb;
            text-decoration: none;
        }

        .footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="document">
        ${markdownToHtml(markdownContent)}
        <div class="footer">
            <p>FOLONITE Smart Asset Management System - Business Overview Document</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`;

// Write HTML file
fs.writeFileSync('FOLONITE_BUSINESS_OVERVIEW.html', htmlContent);
console.log('HTML file generated: FOLONITE_BUSINESS_OVERVIEW.html');
console.log('To create PDF: Open the HTML file in Chrome/Edge and use Ctrl+P to print to PDF');
