// @ts-check

import { test, expect } from '@playwright/test';

const email = 'andhretest@test.com';
const password = '12345678Aa*';

test('should login, create event, book, verify booking and seat count', async ({ page }) => {
	// Login
	await page.goto('https://eventhub.rahulshettyacademy.com/login');

	await page.getByPlaceholder('you@email.com').fill(email);
	await page.getByLabel('Password').fill(password);
	await page.locator('#login-btn').click();

	await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();

	// Create new event
	await page.goto('https://eventhub.rahulshettyacademy.com/admin/events');
	const uniqueTitle = `Title from event ${Date.now()}`;
	console.log(uniqueTitle);

	await page.locator('#event-title-input').fill(uniqueTitle);
	await page.getByPlaceholder('Describe the event…').fill('Description event');
	await page.getByLabel('City').fill('Quillami');
	await page.getByLabel('Venue').fill('Malecon');
	await page.getByLabel('Event Date & Time').fill('2027-03-21T10:00');
	await page.getByLabel('Price ($)').fill('200');
	await page.getByLabel('Total Seats').fill('25');
	await page.locator('#add-event-btn').click();

	await expect(page.getByText('Event created!')).toBeVisible();

	// Find the event card and capture seats
	await page.goto('https://eventhub.rahulshettyacademy.com/events');
	const eventCards = page.getByTestId('event-card');
	//Assert the first card is visible
	await expect(eventCards.first()).toBeVisible();

	const eventCard = eventCards.filter({ hasText: uniqueTitle });
	await expect(eventCard).toBeVisible({ timeout: 5 * 1000 });

	//Read the seat count text from that card (locate element containing text seat
	const seatsNumberBefore = (await eventCard.getByText('seats').innerText()).split(' ')[0];
	// parse integer from its inner text
	const seatsBeforeBooking = parseInt(seatsNumberBefore);
	console.log(seatsNumberBefore, seatsBeforeBooking);

	// Start Booking
	await eventCard.getByTestId('book-now-btn').click();

	// Fill booking form
	await expect(page.locator('#ticket-count')).toHaveText('1');
	await page.getByLabel('Full Name').fill('Andhre');
	await page.locator('#customer-email').fill(email);
	await page.getByPlaceholder('+91 98765 43210').fill('1234567890');
	await page.locator('.confirm-booking-btn').click();

	//verify booking confirmation
	await expect(page.locator('.booking-ref')).toBeVisible();
	const bookingRef = (await page.locator('.booking-ref').innerText()).trim();
	console.log(bookingRef);

	// verify in my bookings
	await page.getByRole('button', { name: 'View My Bookings' }).click();
	// console.log(page.url());
	// expect(page.url()).toBe('https://eventhub.rahulshettyacademy.com/bookings');
	await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/bookings');

	//get all bookings
	const bookingCards = page.locator('#booking-card');
	await expect(bookingCards.first()).toBeVisible();
	const bookingCard = bookingCards.filter({ hasText: bookingRef });
	await expect(bookingCard).toBeVisible();
	// console.log(await bookingCard.innerText());
	expect(await bookingCard.locator('h3').innerText()).toContain(uniqueTitle);

	// verify seat reduction
	await page.goto('https://eventhub.rahulshettyacademy.com/events');
	// Assert the first event card is visible
	await expect(eventCards.first()).toBeVisible();
	await expect(eventCard).toBeVisible();
	const seatsNumberAfter = (await eventCard.getByText('seats').innerText()).split(' ')[0];
	const seatsAfterBooking = parseInt(seatsNumberAfter);
	console.log(seatsAfterBooking);

	expect(seatsAfterBooking === seatsBeforeBooking - 1).toBeTruthy();

	// T-99TZT7
	// await page.pause();
});
