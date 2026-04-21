const { test, expect } = require('@playwright/test');

test('Forgot password flow', async ({ page }) => {
  await page.goto('https://app.vwo.com');
  await page.click('text=Forgot password, text=Reset password, a:has-text("Forgot")');
  await expect(page).toHaveURL(/reset|forgot|password/);
  await expect(page.locator('input[name="email"], input[type="email"]')).toBeVisible();
  await page.fill('input[name="email"], input[type="email"]', 'test-account@example.com');
  await page.click('button[type="submit"], button:has-text("Submit"), button:has-text("Send")');
  await expect(page.locator('text=sent, text=check your inbox, text=reset instructions')).toBeVisible({ timeout: 5000 });
});
