const { test, expect } = require('@playwright/test');

test('Validation — invalid email format', async ({ page }) => {
  await page.goto('https://app.vwo.com');
  await page.fill('input[name="email"], input[type="email"]', 'invalid-email');
  await page.fill('input[name="password"], input[type="password"]', 'SomePass123!');
  await page.click('button[type="submit"], button:has-text("Log in")');
  await expect(page.locator('text=invalid email, text=Enter a valid email, [aria-invalid="true"]')).toBeVisible();
});
