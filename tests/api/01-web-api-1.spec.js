import { test, expect, request } from '@playwright/test';

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

let token;
let orderId;

test.beforeAll(async () => {
	// ? LOGIN
	const apiContext = await request.newContext();
	const loginResponse = await apiContext.post(
		'https://rahulshettyacademy.com/api/ecom/auth/login',
		{
			data: loginPayload,
		},
	);
	//assert the response 200, 201
	expect(await loginResponse.ok()).toBeTruthy();
	// save the response as json
	const loginResponseJson = await loginResponse.json();
	// save the token
	token = loginResponseJson.token;
	console.log(token);

	// ? Check order was made
	const orderResponse = await apiContext.post(
		'https://rahulshettyacademy.com/api/ecom/order/create-order',
		{
			data: orderPayload,
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
		},
	);
	expect(await orderResponse.ok()).toBeTruthy();
	const orderResponseJson = await orderResponse.json();
	orderId = orderResponseJson.orders[0];
	console.log(orderResponseJson);
});

// test.beforeEach(async () => {});

test('should place an order', async ({ page }) => {
	//add token in the localStorage
	await page.addInitScript((value) => {
		window.localStorage.setItem('token', value);
	}, token);

	//go to page
	await page.goto('https://rahulshettyacademy.com/client/');

	//? Go to Orders
	await page.getByRole('button', { name: 'ORDERS' }).click();
	await page.locator('tbody').waitFor(); //wait to get the info
	await expect(page.locator('h1')).toHaveText('Your Orders');

	// * my own assert just the order id to be visible
	await expect(page.locator('th').filter({ hasText: orderId })).toBeVisible();

	const allRows = await page.locator('tbody tr');
	const allRowsCount = await allRows.count();

	for (let i = 0; i < allRowsCount; i++) {
		let row = allRows.nth(i).locator('th');
		let rowOrderId = await row.textContent();

		if (orderId.includes(rowOrderId)) {
			await allRows.nth(i).getByRole('button', { name: 'View' }).click();
			break;
		}
	}

	// ? assertion
	const orderIdDetails = await page.locator('.col-text.-main').textContent();
	// await page.pause();
	expect(orderId.includes(orderIdDetails)).toBeTruthy();
});

// Verify if order created is showing in history page
