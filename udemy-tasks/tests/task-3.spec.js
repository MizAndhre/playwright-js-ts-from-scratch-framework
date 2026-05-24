import { test, expect } from '@playwright/test';
import testData from './data/data.json' assert { type: 'json' };

const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
const email = 'andhretest@test.com';
const password = '12345678Aa*';

async function loginAndGoToEvents(page) {
	await page.goto(BASE_URL);

	await page.getByPlaceholder('you@email.com').fill(email);
	await page.getByLabel('Password').fill(password);
	await page.locator('#login-btn').click();

	await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();

	await page.getByTestId('nav-events').click();
	// await page.goto(`${BASE_URL}/events`);
}

test('Banner IS visible when 6 events are returned', async ({ page }) => {
	//  Set up the API mock
	await page.route('**/api/events**', (route) => {
		route.fulfill({
			status: 200,
			contentType: 'application/json',
			body: JSON.stringify(testData.SIX_EVENTS_RESPONSE),
		});
	});

	//  Login and navigate
	await loginAndGoToEvents(page);

	// Verify cards loaded from mock
	const eventCards = page.getByTestId('event-card');
	await expect(eventCards.first()).toBeVisible();
	// await page.pause();
	expect(await eventCards.count()).toBe(6);

	// Verify banner is visible
	const banner = page.getByText(/sandbox holds up to/i);
	await expect(banner).toBeVisible();
	await expect(banner).toContainText('9 bookings');
});

test('Banner is NOT visible when 4 events are returned', async ({ page }) => {
	//  Set up the API mock
	await page.route('**/api/events**', (route) => {
		route.fulfill({
			status: 200,
			contentType: 'application/json',
			body: JSON.stringify(testData.FOUR_EVENTS_RESPONSE),
		});
	});

	//  Login and navigate
	await loginAndGoToEvents(page);

	// Verify cards loaded from mock
	const eventCards = page.getByTestId('event-card');
	await expect(eventCards.first()).toBeVisible();
	// await page.pause();
	expect(await eventCards.count()).toBe(4);

	// Verify banner is visible
	const banner = page.getByText(/sandbox holds up to/i);
	await expect(banner).not.toBeVisible();
});
