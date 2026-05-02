import { test, expect } from '@playwright/test';

test('should login and find the element', async ({ page }) => {
	await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

	//? LOGIN
	const username = 'Andhre';
	const password = '12345678Aa*';
	const email = 'andhre2@test.com';

	await page.getByPlaceholder('email@example.com').fill(email);
	await page.locator('#userPassword').fill(password);
	await page.locator('#login').click();

	// ?
	const firstTitle = await page.locator('.card-body b').first();
	await expect(firstTitle).toHaveText('ADIDAS ORIGINAL');
	await expect(page.getByText('ADIDAS ORIGINAL')).toBeVisible();
});
