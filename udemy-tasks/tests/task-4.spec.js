import { test, expect, request } from '@playwright/test';
import testData from './data/data.json' assert { type: 'json' };

const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
const API_URL = 'https://api.eventhub.rahulshettyacademy.com/api';
const email = 'andhretest@test.com';
const emailYahoo = 'service.rep.all@yahoo.com';
const password = '12345678Aa*';

async function login(page) {
	await page.goto(BASE_URL);

	await page.getByPlaceholder('you@email.com').fill(email);
	await page.getByLabel('Password').fill(password);
	await page.locator('#login-btn').click();

	await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
}

test('Login as Yahoo user via API', async ({ page, request }) => {
	//? Login as Yahoo user via API
	const loginResponse = await request.post(`${API_URL}/auth/login`, {
		data: {
			email: emailYahoo,
			password: password,
		},
	});
	//Assert the response is OK (loginRes.ok() is truthy)
	expect(await loginResponse.ok()).toBeTruthy();
	const loginResponseJson = await loginResponse.json();
	console.log(loginResponseJson);

	//?  Fetch events via API to get a valid event ID
	const getEventsResponse = await request.get(`${API_URL}/events`, {
		headers: {
			Authorization: `Bearer ${loginResponseJson.token}`,
		},
	});
	console.log(getEventsResponse);
	expect(await getEventsResponse.ok()).toBeTruthy();
	const getEventsResponseJson = await getEventsResponse.json();
	const eventId = getEventsResponseJson.data[0].id;
	console.log(eventId);

	// ? Create a booking via API as Yahoo user
	const createEventResponse = await request.post(`${API_URL}/bookings `, {
		data: {
			eventId: eventId,
			customerName: 'Yahoo User',
			customerEmail: emailYahoo,
			customerPhone: '1234567890',
			quantity: 1,
		},
		headers: {
			Authorization: `Bearer ${loginResponseJson.token}`,
		},
	});
	expect(await createEventResponse.ok()).toBeTruthy();
	const createEventResponseJson = await createEventResponse.json();
	const yahooBookingId = createEventResponseJson.data.id;
	console.log(yahooBookingId);

	// ?  Login as Gmail user via browser UI
	await login(page);

	//? Navigate to Yahoo's booking URL as Gmail user
	page.goto(`${BASE_URL}/bookings/${yahooBookingId}`, { waitUntil: 'networkidle' });

	//? Validate Access Denied
	await expect(page.getByText(' Access Denied')).toBeVisible();
	await expect(page.getByText(' You are not authorized to view this booking')).toBeVisible();
});
