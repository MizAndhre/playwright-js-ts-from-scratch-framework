import { test, expect } from '@playwright/test';

test('should validate hidden element, popups/dialogs, hover, frames ', async ({ page }) => {
	// await page.goto('https://www.google.com/');
	// await page.goBack();
	// await page.goForward();
	await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

	// ?
	await expect(page.locator('#displayed-text')).toBeVisible();
	await page.locator('#hide-textbox').click();
	await expect(page.locator('#displayed-text')).toBeHidden();

	//? confirm a dialog/popup
	page.on('dialog', (dialog) => dialog.accept());
	await page.locator('#confirmbtn').click();
	// page.on('dialog', (dialog) => dialog.dismiss());

	//? hover
	await page.locator('#mousehover').hover();

	// ? Handling Frames
	const framePage = page.frameLocator('#courses-iframe');

	await framePage.locator("li a[href*='lifetime-access']:visible").click();
	const numSubs = await framePage.locator("div[class='text'] h2 span").textContent();
	const text = await framePage.locator("div[class='text'] h2").textContent();
	console.log(text.split(' ')[1]);
});
