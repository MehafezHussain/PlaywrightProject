const { test, expect } = require('@playwright/test');

test('Authentication — incorrect credentials', async ({ page }) => {
  await page.goto('https://app.vwo.com');
  await page.fill('input[name="email"], input[type="email"]', 'known-user@example.com');
  await page.fill('input[name="password"], input[type="password"]', 'WrongPassword123!');
  await page.click('button[type="submit"], button:has-text("Log in")');
  await expect(page.locator('text=Incorrect, text=wrong email or password, text=Invalid credentials')).toBeVisible();
  await expect(page).toHaveURL(/\/login/);
});
