const { test, expect } = require('@playwright/test');

test('Boundary testing — long input / special characters', async ({ page }) => {
  await page.goto('https://app.vwo.com');
  const long = 'a'.repeat(5000);
  await page.fill('input[name="email"], input[type="email"]', long + '@example.com');
  await page.fill('input[name="password"], input[type="password"]', '<script>alert(1)</script>');
  await page.click('button[type="submit"], button:has-text("Log in")');
  await expect(page.locator('text=error, text=invalid, text=too long, text=400')).toBeVisible({ timeout: 5000 });
});
