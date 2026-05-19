import { test, expect } from '@playwright/test';

test('should take screenshot', async ({ page }) => {
	await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

	await expect(page.locator('#displayed-text')).toBeVisible();
	//? take a screenshot
	await page
		.locator('#displayed-text')
		.screenshot({ path: 'tests/ui/screenshot/screenshot-box.png' }); //screenshot on locator
	await page.locator('#hide-textbox').click();

	//? take a screenshot
	await page.screenshot({ path: 'tests/ui/screenshot/screenshot-window.png' }); //screenshot on windows
	await page.screenshot({ path: 'tests/ui/screenshot/screenshot-full.png', fullPage: true }); //screenshot fullpage

	await expect(page.locator('#displayed-text')).toBeHidden();
});

test('should take screenshot and visual comparison', async ({ page }) => {
	await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

	expect(await page.screenshot()).toMatchSnapshot('tests/ui/landing.png');
});
