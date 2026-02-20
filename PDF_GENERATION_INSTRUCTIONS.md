# PDF Generation Instructions

## Quick Method: Browser Print to PDF

The HTML version has been professionally styled for PDF output. To generate the PDF:

### Option 1: Using Chrome or Edge Browser

1. Open the file `FOLONITE_BUSINESS_OVERVIEW.html` in Chrome or Edge browser
2. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
3. In the print dialog:
   - Destination: Select "Save as PDF"
   - Layout: Portrait
   - Paper size: A4
   - Margins: Default (or set to None if you want full page usage)
   - Background graphics: Check this box (important for styled elements)
   - Headers and footers: Uncheck (document has its own footer)
4. Click "Save" and choose your location

### Option 2: Using Firefox

1. Open the file `FOLONITE_BUSINESS_OVERVIEW.html` in Firefox
2. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
3. In the print dialog:
   - Printer: Select "Save to PDF"
   - Orientation: Portrait
   - Paper: A4
   - Margins: Default
   - Print background: Check this option
4. Click "Print" and save the file

### Option 3: Using Safari (Mac)

1. Open the file `FOLONITE_BUSINESS_OVERVIEW.html` in Safari
2. Press `Cmd+P`
3. In the print dialog:
   - Destination: Select PDF at the bottom
   - Orientation: Portrait
   - Paper size: A4
   - Check "Print backgrounds"
4. Click "PDF" -> "Save as PDF"

## Automated Method: Using Node.js

If you have Node.js installed, you can use the following tools:

### Using Puppeteer (Recommended)

```bash
# Install puppeteer
npm install puppeteer

# Create a script named convert-to-pdf.js:
```

```javascript
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto(`file://${path.resolve(__dirname, 'FOLONITE_BUSINESS_OVERVIEW.html')}`, {
    waitUntil: 'networkidle0'
  });
  
  await page.pdf({
    path: 'FOLONITE_BUSINESS_OVERVIEW.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '2cm',
      bottom: '2cm',
      left: '2cm',
      right: '2cm'
    }
  });
  
  await browser.close();
  console.log('PDF generated successfully: FOLONITE_BUSINESS_OVERVIEW.pdf');
})();
```

```bash
# Run the script
node convert-to-pdf.js
```

### Using wkhtmltopdf (Command Line Tool)

```bash
# Install wkhtmltopdf from: https://wkhtmltopdf.org/

# Run the conversion
wkhtmltopdf --page-size A4 --margin-top 2cm --margin-bottom 2cm --margin-left 2cm --margin-right 2cm FOLONITE_BUSINESS_OVERVIEW.html FOLONITE_BUSINESS_OVERVIEW.pdf
```

### Using Headless Chrome (No Installation)

```bash
# On Windows
chrome --headless --disable-gpu --print-to-pdf="FOLONITE_BUSINESS_OVERVIEW.pdf" FOLONITE_BUSINESS_OVERVIEW.html

# On Mac
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --print-to-pdf="FOLONITE_BUSINESS_OVERVIEW.pdf" FOLONITE_BUSINESS_OVERVIEW.html

# On Linux
google-chrome --headless --disable-gpu --print-to-pdf="FOLONITE_BUSINESS_OVERVIEW.pdf" FOLONITE_BUSINESS_OVERVIEW.html
```

## Online Converters

If you prefer not to install software, you can use online converters:

1. https://cloudconvert.com/html-to-pdf
2. https://www.ilovepdf.com/html-to-pdf
3. https://smallpdf.com/html-to-pdf

Simply upload the `FOLONITE_BUSINESS_OVERVIEW.html` file and download the resulting PDF.

## Document Information

- **Title**: FOLONITE Smart Asset Management System - Business Overview
- **Pages**: Approximately 15-20 pages
- **Format**: A4
- **Style**: Professional business document
- **Content**: Comprehensive business-focused overview (no technical jargon)
- **No emojis**: As requested
- **No dashes**: As requested
- **Structure**: Clean, organized sections

## Files Available

1. **FOLONITE_BUSINESS_OVERVIEW.md** - Markdown source format
2. **FOLONITE_BUSINESS_OVERVIEW.html** - Professionally styled HTML (print-ready)
3. **generate_pdf.js** - Node.js conversion script (alternative method)

## Notes

- The HTML document includes print-specific CSS (@page rules) for optimal PDF formatting
- Page breaks are set before major sections for better readability
- The document uses standard business fonts that render well in PDF format
- All styling is inline within the HTML file for easy conversion
- The document is designed to print cleanly on any standard PDF generator

## Support

If you encounter any issues with PDF generation or need assistance with document customization, please contact:
- Email: support@folonite.in
- Website: https://folonitetrack.in
