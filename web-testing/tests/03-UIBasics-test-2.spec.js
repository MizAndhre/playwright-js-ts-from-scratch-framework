// import {}
import { test, expect } from '@playwright/test';
import { randomBytes } from 'node:crypto';

test('should login', async ({ page }) => {
	await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
	console.log(await page.title());

	//Fill all the info in the inputs
	const username = page.locator('input#username');
	await username.fill('rahulshettyacademy');

	const password = page.locator('#password');
	await password.fill('Learning@830$3mK2');

	//Select Dropdowns
	const dropdown = page.locator('select.form-control');
	await dropdown.selectOption('teach');

	// Select Radio Buttons
	const radioBtn = page.locator('.radiotextsty').last();
	await radioBtn.click();
	await page.locator('#okayBtn').click(); //ok pop up
	// assertions
	await expect(radioBtn).toBeChecked();
	console.log(await radioBtn.isChecked());

	// Select checkbox
	const checkboxBtn = page.locator('#terms');
	await checkboxBtn.click();
	await expect(checkboxBtn).toBeChecked();
	await checkboxBtn.uncheck();
	await expect(checkboxBtn).not.toBeChecked();
	expect(await checkboxBtn.isChecked()).toBeFalsy();

	//
	const docuLink = page.locator('[href*="documents-request"]');
	await expect(docuLink).toHaveAttribute('class', 'blinkingText');
});

// ? Open a new Page

test('should child windows', async ({ browser }) => {
	const context = await browser.newContext();
	const page = await context.newPage();
	await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

	//get element
	const docuLink = page.locator('[href*="documents-request"]');
	//Give knowloadge of a new page

	// ? Promise.All => pending,rejected,fulfilled
	const [newPage] = await Promise.all([
		context.waitForEvent('page'), // listen for new pages
		docuLink.click(), //open new page
	]);

	const text = await newPage.locator('.red').textContent();
	const arrayText = text.split('@');
	const domain = arrayText[1].split(' ')[0];
	console.log(domain);
	console.log(text);

	const username = page.locator('input#username');
	await username.fill(domain);

	// console.log(await page.locator('#username').textContent()); // to read things IN the page
	console.log(await page.locator('#username').inputValue()); // to check things added in the test
});
