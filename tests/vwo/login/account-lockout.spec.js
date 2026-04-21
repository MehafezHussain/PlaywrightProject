const { test, expect } = require('@playwright/test');

test('Security — account lockout / rate limit', async ({ page }) => {
  await page.goto('https://app.vwo.com');
  for (let i = 0; i < 5; i++) {
    await page.fill('input[name="email"], input[type="email"]', 'known-user@example.com');
    await page.fill('input[name="password"], input[type="password"]', `WrongPassword${i}`);
    await page.click('button[type="submit"], button:has-text("Log in")');
    await page.waitForTimeout(500);
  }
  await expect(page.locator('text=locked, text=temporarily locked, text=captcha, text=too many attempts')).toBeVisible({ timeout: 5000 });
});
