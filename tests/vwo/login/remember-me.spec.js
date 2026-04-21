const { test, expect } = require('@playwright/test');

test('Remember me / persistent session', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const email = process.env.VWO_EMAIL;
  const password = process.env.VWO_PASSWORD;
  test.skip(!email || !password, 'Set VWO_EMAIL and VWO_PASSWORD to run');

  await page.goto('https://app.vwo.com');
  await page.fill('input[name="email"], input[type="email"]', email);
  await page.fill('input[name="password"], input[type="password"]', password);
  await page.check('input[type="checkbox"], input[name="remember"], input[name="remember_me"]');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.click('button[type="submit"], button:has-text("Log in")')
  ]);

  const storage = await context.storageState();
  await context.close();

  const newContext = await browser.newContext({ storageState: storage });
  const newPage = await newContext.newPage();
  await newPage.goto('https://app.vwo.com');
  await expect(newPage.locator('text=Dashboard, text=Projects')).toBeVisible({ timeout: 10000 });
});
