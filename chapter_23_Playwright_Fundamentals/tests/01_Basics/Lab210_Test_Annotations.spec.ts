import {test, expect} from '@playwright/test';

//Test Annotations example

test.describe("Test Suite: User Authentication", () => {
    test("Test Case 1: Verify login with valid credentials", async ({page}) => {
        await page.goto("https://app.vwo.com");
        console.log(await page.title());
        expect(await page.title()).toBe("Login - VWO");
    });

    test("Test Case 2: Verify login with invalid credentials", async ({page}) => {
        await page.goto("https://app.vwo.com");
        console.log(await page.title());
        expect(await page.title()).toBe("Login - VWO");
    });
});

//skip test example 
test.skip("Test Case 3: Verify login with empty credentials", async ({page}) => {
    await page.goto("https://app.vwo.com");
    console.log(await page.title());
    expect(await page.title()).toBe("Login - VWO");
});

//only test example
test.only("Test Case 4: Verify login with locked account", async ({page}) => {
    await page.goto("https://app.vwo.com");
    console.log(await page.title());
    expect(await page.title()).toBe("Login - VWO");
});

//slow test example
test("Test Case 5: Verify login with slow network", async ({page}) => {
    await page.goto("https://app.vwo.com");
    console.log(await page.title());
    expect(await page.title()).toBe("Login - VWO");
});

//Mark as failing test example
test("Test Case 6: Verify login with expired password", async ({page}) => {
    await page.goto("https://app.vwo.com");
    console.log(await page.title());
    expect(await page.title()).toBe("Login - VWO");
});

//conditional test example
test("Test Case 7: Verify login on mobile device", async ({page, browserName}) => {
    test.skip(browserName !== 'chromium', "This test is only relevant for mobile devices"); 
    await page.goto("https://app.vwo.com");
    console.log(await page.title());
    expect(await page.title()).toBe("Login - VWO");
});

