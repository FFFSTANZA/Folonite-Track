const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const htmlFile = path.resolve(__dirname, 'FOLONITE_BUSINESS_OVERVIEW.html');
const pdfFile = path.resolve(__dirname, 'FOLONITE_BUSINESS_OVERVIEW.pdf');

console.log('PDF Generation Script');
console.log('=====================\n');

// Check if the HTML file exists
if (!fs.existsSync(htmlFile)) {
  console.error('Error: FOLONITE_BUSINESS_OVERVIEW.html not found!');
  process.exit(1);
}

console.log(`HTML file: ${htmlFile}`);
console.log(`PDF file: ${pdfFile}\n`);

// Function to try different PDF generation methods
function tryPuppeteer() {
  return new Promise((resolve) => {
    console.log('Attempting to use Puppeteer...');
    try {
      const puppeteer = require('puppeteer');
      resolve({ method: 'puppeteer', available: true });
    } catch (e) {
      console.log('Puppeteer not installed.');
      resolve({ method: 'puppeteer', available: false });
    }
  });
}

function tryChromeCommand() {
  return new Promise((resolve) => {
    const platform = process.platform;
    let command = null;

    if (platform === 'darwin') {
      command = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    } else if (platform === 'win32') {
      command = 'chrome';
    } else {
      command = 'google-chrome';
    }

    exec(`which ${command}`, (error) => {
      if (error) {
        console.log('Chrome not found in PATH.');
        resolve({ method: 'chrome', available: false, command: null });
      } else {
        resolve({ method: 'chrome', available: true, command });
      }
    });
  });
}

async function generateWithPuppeteer() {
  console.log('\nGenerating PDF with Puppeteer...\n');
  const puppeteer = require('puppeteer');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`file://${htmlFile}`, { waitUntil: 'networkidle0', timeout: 30000 });

  await page.pdf({
    path: pdfFile,
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
  console.log('PDF generated successfully!\n');
}

function generateWithChrome(command) {
  return new Promise((resolve, reject) => {
    console.log(`\nGenerating PDF with ${command}...\n`);

    const fullCommand = `"${command}" --headless --disable-gpu --print-to-pdf="${pdfFile}" "${htmlFile}"`;

    exec(fullCommand, (error, stdout, stderr) => {
      if (error) {
        console.error('Error:', error.message);
        reject(error);
        return;
      }
      if (stderr && !stderr.includes('DevTools')) {
        console.error('stderr:', stderr);
      }
      console.log('PDF generated successfully!\n');
      resolve();
    });
  });
}

async function main() {
  try {
    // Try Puppeteer first
    const puppeteerResult = await tryPuppeteer();

    if (puppeteerResult.available) {
      await generateWithPuppeteer();
    } else {
      // Try Chrome command
      const chromeResult = await tryChromeCommand();

      if (chromeResult.available) {
        await generateWithChrome(chromeResult.command);
      } else {
        console.log('\nNo automated PDF generation tool available.\n');
        console.log('Please use one of these methods:\n');
        console.log('1. Browser Print to PDF (Easiest):');
        console.log('   - Open FOLONITE_BUSINESS_OVERVIEW.html in Chrome/Edge');
        console.log('   - Press Ctrl+P (or Cmd+P on Mac)');
        console.log('   - Select "Save as PDF" as the destination');
        console.log('   - Check "Background graphics" option');
        console.log('   - Click Save\n');

        console.log('2. Install Puppeteer:');
        console.log('   npm install puppeteer');
        console.log('   node convert-to-pdf.js\n');

        console.log('3. Use an online converter:');
        console.log('   - https://cloudconvert.com/html-to-pdf');
        console.log('   - https://www.ilovepdf.com/html-to-pdf\n');

        process.exit(0);
      }
    }

    // Verify PDF was created
    if (fs.existsSync(pdfFile)) {
      const stats = fs.statSync(pdfFile);
      console.log(`PDF file created: ${pdfFile}`);
      console.log(`File size: ${(stats.size / 1024).toFixed(2)} KB`);
    }

  } catch (error) {
    console.error('\nFailed to generate PDF:', error.message);
    console.log('\nFalling back to manual method...');
    console.log('Please open FOLONITE_BUSINESS_OVERVIEW.html in a browser and print to PDF.\n');
    process.exit(1);
  }
}

main();
