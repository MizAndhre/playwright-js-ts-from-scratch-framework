import { page } from '@playwright/test';

export class CheckoutPage {
	constructor(page) {
		this.country = page.getByPlaceholder('Select Country');
		this.countryDropdown = page.locator('.ta-results');
		this.emailLabel = page.locator("label[type='text']");
		this.placeOrderButton = page.locator('.action__submit');
	}

	async fillAndSelectCountry() {
		await this.country.pressSequentially('co', { delay: 150 });
		await this.countryDropdown.getByText('Colombia', { exact: true }).click();
	}

	async goToPlaceOrder() {
		await this.placeOrderButton.click();
	}
}

// await page.getByPlaceholder('Select Country').pressSequentially('co', { delay: 150 });
// const countryDropdown = page.locator('.ta-results');
//

//second way of selecting an element
// const countryDropdown = page.locator('.ta-results');
// const optionsCount = await countryDropdown.locator('button').count();
// for (let i = 0; i < optionsCount; i++) {
// 	let country = countryDropdown.locator('button').nth(i);
// 	let countryName = await country.textContent();
// 	let countryNameTrim = countryName.trim();

// 	if (countryNameTrim === 'Colombia') {
// 		await country.click();
// 		break;
// 	}
// }
