// import {}
import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });
test.describe('parallel work', () => {
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
		await expect(page).toHaveTitle('Google');
	});

	test('should verify the title is shown', async ({ page }) => {
		await page.goto('https://playwright.dev');

		const titles = page.getByText(
			'Playwright enables reliable web automation for testing, scripting, and AI agents.',
		);

		await expect(titles).toBeVisible();
	});

	test.skip('should login correctly', async ({ browser }) => {
		const context = await browser.newContext();
		const page = await context.newPage();

		await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
		console.log(await page.title());

		// ! Selectors CSS - XPATH

		const username = await page.locator('input#username');
		await username.fill('rahulshettyacademy');
		await page.locator('#password').type('Learning@830$3mK2'); // type is depricated
		await page.locator('#signInBtn').click();

		await expect(page).toHaveTitle('ProtoCommerce');
	});

	test('should show error message when incorrect user info', async ({ page }) => {
		await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
		console.log(await page.title());

		const username = page.locator('input#username');
		await username.fill('wrongusername');
		await page.locator('#password').type('Learning@830$3mK2'); // type is depricated
		await page.locator('#signInBtn').click();

		const alert = await page.locator('div.alert.alert-danger.col-md-12');
		await expect(alert).toContainText('Incorrect');

		await expect(page.getByText('Incorrect username/password.')).toBeVisible();
	});

	test('should show error message, blank the fill and login succesfully', async ({ page }) => {
		await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
		console.log(await page.title());

		//Fill all the info in the inputs
		const username = page.locator('input#username');
		await username.fill('wrongusername');

		const password = page.locator('#password');
		await password.fill('Learning@830$3mK2');

		const loginBtn = page.locator('#signInBtn');
		await loginBtn.click();

		// Expect error message
		await expect(page.getByText('Incorrect username/password.')).toBeVisible();

		// Blank the input and fill correct info
		await username.fill('');
		await username.fill('rahulshettyacademy');
		await loginBtn.click();

		// expect change to the other page
		await expect(page.locator('.card-body a').first()).toContainText('iphone X'); //case sensitive
		await expect(page.locator('.card-body a').nth(2)).toHaveText('Nokia Edge');
		await expect(page.locator('.card-body a').last()).toContainText('Blackberry');
	});

	test('should show login and grab all cards text', async ({ page }) => {
		await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
		console.log(await page.title());

		//Fill all the info in the inputs
		const username = page.locator('input#username');
		await username.fill('rahulshettyacademy');

		const password = page.locator('#password');
		await password.fill('Learning@830$3mK2');

		const loginBtn = page.locator('#signInBtn');
		await loginBtn.click();

		// wait to api calls are done
		// await page.waitForLoadState('networkidle');
		await page.locator('.card-body a').first().waitFor(); //? wait for works with only one element

		//get all titles
		const allTitles = await page.locator('.card-body a').allTextContents();
		console.log(allTitles);
		expect(allTitles).toContain('Nokia Edge');
	});
});
