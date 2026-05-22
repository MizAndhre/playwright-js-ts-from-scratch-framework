
export class LoginPage {
	constructor(page) {
		this.page = page;
		this.userName = page.getByPlaceholder('email@example.com');
		this.password = page.locator('#userPassword');
		this.signInButton = page.locator("[value='Login']");
	}

	async goTo() {
		await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
	}

	async login(email, password) {
		await this.userName.fill(email);
		await this.password.fill(password);
		await this.signInButton.click();
	}
}
