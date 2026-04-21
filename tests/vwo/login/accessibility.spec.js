const { test, expect } = require('@playwright/test');

test('Accessibility & keyboard navigation', async ({ page }) => {
  await page.goto('https://app.vwo.com');
  await expect(page.locator('input[name="email"], input[type="email"]')).toHaveAttribute('aria-label', /.+|/);
  await expect(page.locator('input[name="password"], input[type="password"]')).toHaveAttribute('aria-label', /.+|/);

  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await expect(page.locator('button[type="submit"], button:has-text("Log in")')).toBeFocused();
});
