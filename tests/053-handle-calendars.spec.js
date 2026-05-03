import { test, expect } from '@playwright/test';

test('should handle calendars', async ({ page }) => {
	await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');

	const month = '03';
	const day = '21';
	const year = '2025';

	await page.locator('.react-date-picker__inputGroup').click();
	//two clicks
	await page.locator('.react-calendar__navigation__label').click();
	await page.locator('.react-calendar__navigation__label').click();

	//choose year
	await page.getByText(year).click();
	await page
		.locator('button.react-calendar__year-view__months__month')
		.nth(Number(month) - 1)
		.click();
	await page.locator(`//abbr[text()='${day}']`).click();

	await expect(page.locator('[name="date"]')).toHaveAttribute('value', `${year}-${month}-${day}`);
	await expect(page.locator('[name="date"]')).toHaveValue(`${year}-${month}-${day}`);

	//kind of an abomination
	const expectedList = [Number(month).toString(), day, year];
	const inputsValues = page.locator('.react-date-picker__inputGroup__input');

	for (let i = 0; i < expectedList.length; i++) {
		const value = await inputsValues.nth(i).inputValue();
		expect(value).toEqual(expectedList[i]);
	}
});
