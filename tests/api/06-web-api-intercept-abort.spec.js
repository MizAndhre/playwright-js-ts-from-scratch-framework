import { test, expect, request } from '@playwright/test';
import { ApiUtils } from './utilities/ApiUtils';

test('should intercept and abort properly', async ({ browser }) => {
	const context = await browser.newContext();
	const page = await context.newPage();

	// ? block css
	await page.route('**/*.css', (route) => route.abort());
	//? listener, invoked when an event occurred
	await page.on('request', (request) => console.log(request.url()));
	await page.on('response', (response) => console.log(response.url(), response.status()));

	await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

	// await page.pause();
	console.log(await page.title());

	const username = await page.locator('input#username');
	await username.fill('rahulshettyacademy');
	await page.locator('#password').type('Learning@830$3mK2'); // type is depricated

	// ? block images
	await page.route('**/*.{png,jpg,jpeg}', (route) => route.abort());
	await page.on('request', (request) => console.log(request.url()));
	await page.on('response', (response) => console.log(response.url(), response.status()));

	await page.locator('#signInBtn').click();

	await expect(page).toHaveTitle('ProtoCommerce');
	// await page.pause();
});
