import { test, expect } from '@playwright/test';

// test('should first register an account, login and find element', async ({ page }) => {
// 	await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

// 	await page.getByText('Register Here').click();

// 	const username = 'Andhre';
// 	const password = '12345678Aa*';
// 	const email = 'andhre2@test.com';

// 	await page.getByPlaceholder('First Name').fill(username);
// 	await page.getByPlaceholder('Last Name').fill('Test');
// 	await page.locator('#userEmail').fill(email);
// 	await page.locator('#userMobile').fill('1234567890');
// 	await page.getByPlaceholder('Passsword', { exact: true }).fill(password);
// 	await page.getByPlaceholder('Confirm Passsword', { exact: true }).fill(password);
// 	await page.getByRole('checkbox').click();

// 	await page.locator('#login').click();

// 	await page.getByRole('button', { name: 'Login' }).click();

// 	await page.getByPlaceholder('email@example.com').fill(email);
// 	await page.locator('#userPassword').fill(password);
// 	await page.locator('#login').click();

// 	const firstTitle = await page.locator('.card-body b').first();
// 	await expect(firstTitle).toHaveText('ADIDAS ORIGINAL');
// 	await expect(page.getByText('ADIDAS ORIGINAL')).toBeVisible();
// });

test('should login and find the element', async ({ page }) => {
	await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

	const username = 'Andhre';
	const password = '12345678Aa*';
	const email = 'andhre2@test.com';

	await page.getByPlaceholder('email@example.com').fill(email);
	await page.locator('#userPassword').fill(password);
	await page.locator('#login').click();

	const firstTitle = await page.locator('.card-body b').first();
	await expect(firstTitle).toHaveText('ADIDAS ORIGINAL');
	await expect(page.getByText('ADIDAS ORIGINAL')).toBeVisible();
});

test('should login and get all elements', async ({ page }) => {
	await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

	const username = 'Andhre';
	const password = '12345678Aa*';
	const email = 'andhre2@test.com';

	await page.getByPlaceholder('email@example.com').fill(email);
	await page.locator('#userPassword').fill(password);
	await page.locator('#login').click();

	await page.waitForLoadState('networkidle'); // DISCOURAGED
	const titles = await page.locator('.card-body b').allTextContents();
	console.log(titles);
});
