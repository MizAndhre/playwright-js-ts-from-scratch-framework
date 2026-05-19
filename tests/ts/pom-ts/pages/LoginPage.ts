import { Locator, Page } from '@playwright/test';

export class LoginPage {
	private readonly page: Page;
	private readonly userName: Locator;
	private readonly password: Locator;
	private readonly signInButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.userName = page.getByPlaceholder('email@example.com');
		this.password = page.locator('#userPassword');
		this.signInButton = page.locator("[value='Login']");
	}

	async goTo() {
		await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
	}

	async login(email: string, password: string) {
		await this.userName.fill(email);
		await this.password.fill(password);
		await this.signInButton.click();
	}
}
