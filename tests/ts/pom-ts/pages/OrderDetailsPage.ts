import { Locator, Page } from '@playwright/test';

export class OrderDetailsPage {
	private readonly orderId: Locator;
	constructor(page: Page) {
		this.orderId = page.locator('.col-text.-main');
	}
}
