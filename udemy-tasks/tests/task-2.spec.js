import { test, expect } from '@playwright/test';

const email = 'andhretest@test.com';
const password = '12345678Aa*';

async function loginAndGoToBooking(page) {
	await page.goto('https://eventhub.rahulshettyacademy.com/login');

	await page.getByPlaceholder('you@email.com').fill(email);
	await page.getByLabel('Password').fill(password);
	await page.locator('#login-btn').click();

	await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
}

test('Single ticket booking is eligible for refund', async ({ page }) => {
	// Login
	loginAndGoToBooking(page);

	//  Book first event with 1 ticket (default)
	await page.getByTestId('nav-events').click();
	const eventCards = page.getByTestId('event-card');
	await eventCards.first().getByTestId('book-now-btn').click();
	await page.getByLabel('Full Name').fill('Andhre');
	await page.locator('#customer-email').fill(email);
	await page.getByPlaceholder('+91 98765 43210').fill('1234567890');
	await page.locator('.confirm-booking-btn').click();

	// Navigate to booking detail
	await page.getByRole('button', { name: 'View My Bookings' }).click();
	await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/bookings');

	const bookingCards = page.locator('#booking-card');
	await bookingCards.first().getByText('View Details').click();
	//Assert: text Booking Information is visible on the page
	await expect(page.getByText('Booking Information')).toBeVisible();

	// Validate booking ref
	const bookingRef = await page
		.locator('span.font-mono.font-bold.text-indigo-600.bg-indigo-50.px-3.py-1.rounded-lg.text-sm')
		.innerText();

	const eventTitle = await page.locator('h1').innerText();
	//"first character of booking ref equals first character of event title"
	expect(bookingRef[0]).toBe(eventTitle[0]);

	// Check refund eligibility
	await page.getByTestId('check-refund-btn').click();
	await expect(page.locator('#refund-spinner')).toBeVisible();
	await expect(page.locator('#refund-spinner')).not.toBeVisible({ timeout: 6 * 1000 });

	// Validate result
	const result = page.locator('#refund-result');
	await expect(result).toBeVisible();
	await expect(result).toContainText('Eligible for refund');
	await expect(result).toContainText('Single-ticket bookings qualify for a full refund');
});

test('Group ticket booking is NOT eligible for refund', async ({ page }) => {
	// Login
	await loginAndGoToBooking(page);

	//  Book first event with 1 ticket (default)
	await page.getByTestId('nav-events').click();
	const eventCards = page.getByTestId('event-card');
	await eventCards.first().getByTestId('book-now-btn').click();
	// click the + button twice to increase quantity to 3
	await page.getByRole('button', { name: '+' }).dblclick();
	await page.getByLabel('Full Name').fill('Andhre');
	await page.locator('#customer-email').fill(email);
	await page.getByPlaceholder('+91 98765 43210').fill('1234567890');
	await page.locator('.confirm-booking-btn').click();

	// Navigate to booking detail
	await page.getByRole('button', { name: 'View My Bookings' }).click();
	await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/bookings');

	const bookingCards = page.locator('#booking-card');
	await bookingCards.first().getByText('View Details').click();
	//Assert: text Booking Information is visible on the page
	await expect(page.getByText('Booking Information')).toBeVisible();

	// Validate booking ref
	const bookingRef = await page
		.locator('span.font-mono.font-bold.text-indigo-600.bg-indigo-50.px-3.py-1.rounded-lg.text-sm')
		.innerText();

	const eventTitle = await page.locator('h1').innerText();
	//"first character of booking ref equals first character of event title"
	expect(bookingRef[0]).toBe(eventTitle[0]);

	// Check refund eligibility
	await page.getByTestId('check-refund-btn').click();
	await expect(page.locator('#refund-spinner')).toBeVisible();
	await expect(page.locator('#refund-spinner')).not.toBeVisible({ timeout: 6 * 1000 });

	// Validate result
	const result = page.locator('#refund-result');
	await expect(result).toBeVisible();
	await expect(result).toContainText('Not eligible for refund');
	await expect(result).toContainText('Group bookings (3 tickets) are non-refundable');
});
