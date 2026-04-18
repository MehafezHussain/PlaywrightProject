const { test, expect } = require('@playwright/test');

test('seed: load Playwright Test Agents doc', async ({ page }) => {
  // Navigate to the Playwright Test Agents documentation
  await page.goto('https://playwright.de/docs/test-agents');
  await page.waitForLoadState('networkidle');

  // Optional: capture a small screenshot to help agents / reviewers inspect the page
  await page.screenshot({ path: 'test-results/seed-playwright-test-agents.png', fullPage: false });

  // Basic assertion to ensure the page loaded
  const title = await page.title();
  expect(title.toLowerCase()).toContain('playwright');
});
