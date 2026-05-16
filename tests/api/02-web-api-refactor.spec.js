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
	// ? LOGIN
	const apiContext = await request.newContext();
	//object of class
	const apiUtils = new ApiUtils(apiContext, loginPayload);

	// ? Check order was made
	response = await apiUtils.createOrder(orderPayload);
});

test('should place an order', async ({ page }) => {
	//add token in the localStorage
	await page.addInitScript((value) => {
		window.localStorage.setItem('token', value);
	}, response.token);

	//go to page
	await page.goto('https://rahulshettyacademy.com/client/');

	//? Go to Orders
	await page.getByRole('button', { name: 'ORDERS' }).click();
	await page.locator('tbody').waitFor(); //wait to get the info
	await expect(page.locator('h1')).toHaveText('Your Orders');

	// * my own assert just the order id to be visible
	await expect(page.locator('th').filter({ hasText: response.orderId })).toBeVisible();

	const allRows = await page.locator('tbody tr');
	const allRowsCount = await allRows.count();

	for (let i = 0; i < allRowsCount; i++) {
		let row = allRows.nth(i).locator('th');
		let rowOrderId = await row.textContent();

		if (response.orderId.includes(rowOrderId)) {
			await allRows.nth(i).getByRole('button', { name: 'View' }).click();
			break;
		}
	}

	// ? assertion
	const orderIdDetails = await page.locator('.col-text.-main').textContent();
	expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
});

// Verify if order created is showing in history page
