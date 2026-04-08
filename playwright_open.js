const { chromium } = require('playwright');

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const url = 'https://app.thetestingacademy.com/';
  console.log('Opening', url);
  await page.goto(url, { waitUntil: 'networkidle' });
  const screenshotPath = 'playwright-screenshot.png';
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log('Screenshot saved to', screenshotPath);
  await browser.close();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
