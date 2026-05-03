import { test, expect } from '@playwright/test';

test('should locate using getByLabel', async ({ page }) => {
	await page.goto('https://rahulshettyacademy.com/angularpractice/');

	await page.getByLabel('Check me out if you Love IceCreams!').click();

	await page.getByLabel('Employed').click();
	await page.getByLabel('Student').check();

	await page.getByLabel('Password').fill('1234');

	await page.getByLabel('Gender').selectOption('Female');

	// await page.pause();
});

test('should locate using getByPlaceholder, getByRole, getByText, filter()', async ({ page }) => {
	await page.goto('https://rahulshettyacademy.com/angularpractice/');

	await page.getByPlaceholder('Password').fill('123551');

	await page.getByRole('button', { name: 'Submit' }).click();

	await page.getByText('Success! The Form has been submitted successfully!.').highlight();

	await page.getByRole('link', { name: 'Shop' }).click();

	await page.locator('app-card').filter({ hasText: 'Nokia Edge' }).getByRole('button').click();

	// await page.pause();
});
