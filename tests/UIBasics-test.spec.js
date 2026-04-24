// import {}
import { test, expect } from '@playwright/test';

test('First Playwright test', async () => {
	//playwrigth code
});

//funciton block
test('should first', () => {
	//code
});

//async block
test('should check the browser context', async ({ browser }) => {
	//chrome - plugins/ cookies
	// new context = new instance | can used inyected cookies
	const context = await browser.newContext();
	const page = await context.newPage();
	// ? If nothing is needed to be passed to the browser, {page} fixture would be the default

	await page.goto('https://google.com');
	//get title
	// await page.title();
	//assert if it title is correct
    await expect(page).toHaveTitle('Google')


});


test('should verify the title is shown', async ({ page }) => {
	await page.goto('https://playwright.dev');

	const titles = page.getByText(
		'Playwright enables reliable web automation for testing, scripting, and AI agents.',
	);

	await expect(titles).toBeVisible();
});
