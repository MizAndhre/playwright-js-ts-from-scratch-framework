import { page } from '@playwright/test';

export class OrderDetailsPage {
	constructor(page) {
		this.orderId = page.locator('.col-text.-main');
	}
}
