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

const fakePayloadOrders = { data: [], message: 'No Orders' };

let response;

test.beforeAll(async () => {
	//  LOGIN
	const apiContext = await request.newContext();
	//object of class
	const apiUtils = new ApiUtils(apiContext, loginPayload);

	//  Check order was made
	response = await apiUtils.createOrder(orderPayload);
});

test('should intercept a network request and send fake info', async ({ page }) => {
	//add token in the localStorage
	await page.addInitScript((value) => {
		window.localStorage.setItem('token', value);
	}, response.token);

	//go to page
	await page.goto('https://rahulshettyacademy.com/client/');

	//? Mock Orders call to show nothing
	await page.route(
		'https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*', // accepts anaything after the *
		async (route) => {
			//? intercept the response
			const response = await page.request.fetch(route.request());
			let body = JSON.stringify(fakePayloadOrders);

			//? send fake info
			route.fulfill({
				response,
				body,
			});
		},
	);

	// Go to Orders
	await page.getByRole('button', { name: 'ORDERS' }).click();
	// * wait for response to have the api fetch and avoid sending fake info before that
	await page.waitForResponse(
		'https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*',
	);
	// await page.pause();

	//assert
	await expect(page.getByText('You have No Orders to show at')).toBeVisible();
});
