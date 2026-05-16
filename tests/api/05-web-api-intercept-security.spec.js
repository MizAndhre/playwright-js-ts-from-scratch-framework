import { test, expect, request } from '@playwright/test';
import { ApiUtils } from './utilities/ApiUtils';

const loginPayload = {
	userEmail: 'andhre2@test.com',
	userPassword: '12345678Aa*',
};

const orderPayload = {
	orders: [
		{
			country: 'India',
			productOrderedId: '6960eae1c941646b7a8b3ed3',
		},
	],
};

let response;

test.beforeAll(async () => {
	// LOGIN
	const apiContext = await request.newContext();
	//object of class
	const apiUtils = new ApiUtils(apiContext, loginPayload);
	// Check order was made
	response = await apiUtils.createOrder(orderPayload);
});

test('security test request intercept', async ({ page }) => {
	await page.addInitScript((value) => {
		window.localStorage.setItem('token', value);
	}, response.token);

	await page.goto('https://rahulshettyacademy.com/client/');

	await page.getByRole('button', { name: 'ORDERS' }).click();
	await page.locator('tbody').waitFor(); //wait to get the info
	await expect(page.locator('h1')).toHaveText('Your Orders');

	// ? Intercept and send to another URL
	await page.route(
		'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*',
		async (route) =>
			await route.continue({
				url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=69ffdee1e83610b531d5fc00',
			}),
	);

	await page.getByRole('button', { name: 'View' }).first().click();

	// await page.pause();
	// ? assertion
	await expect(page.getByText('You are not authorize to view this order')).toBeVisible();
});

// Verify if order created is showing in history page
