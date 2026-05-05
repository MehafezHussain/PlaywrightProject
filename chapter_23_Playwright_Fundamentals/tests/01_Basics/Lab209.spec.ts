import {test, expect} from '@playwright/test';

//Class and Object example

test("Verify the title of the app.vwo.com",async ({page})=>{
    await page.goto("https://app.vwo.com");
    console.log(await page.title());
    expect(await page.title()).toBe("Login - VWO");
})