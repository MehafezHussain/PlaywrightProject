const { test, expect } = require('@playwright/test');

test('Happy path — successful login', async ({ page }) => {
  const email = process.env.VWO_EMAIL;
  const password = process.env.VWO_PASSWORD;
  test.skip(!email || !password, 'Set VWO_EMAIL and VWO_PASSWORD to run');

  await page.goto('https://app.vwo.com');
  await expect(page.locator('input[name="email"], input[type="email"]')).toBeVisible();
  await expect(page.locator('input[name="password"], input[type="password"]')).toBeVisible();
  await page.fill('input[name="email"], input[type="email"]', email);
  await page.fill('input[name="password"], input[type="password"]', password);

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle', timeout: 10000 }),
    page.click('button[type="submit"], button:has-text("Log in"), input[type="submit"]')
  ]);

  await expect(page).not.toHaveURL(/\/login/);
  await expect(page.locator('text=Dashboard, text=Projects, [data-testid="dashboard"]')).toBeVisible({ timeout: 10000 });
});
