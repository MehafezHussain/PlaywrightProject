const { test, expect } = require('@playwright/test');

test('Validation — empty fields', async ({ page }) => {
  await page.goto('https://app.vwo.com');
  await page.click('button[type="submit"], button:has-text("Log in"), input[type="submit"]');
  await expect(page.locator('text=required, text=This field is required, [aria-invalid="true"]')).toBeVisible();
});
