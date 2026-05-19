let message1: string = 'Hello';
// message1 = 3;

let age: number = 124;
let decimal: number = 34.5;

let isActive: boolean = true;
let arrayNumber: number[] = [1, 3, 4];

let arrayMix: any[] = ['qewr', 34, 153];

console.log(age);

// ?
function myFunction(a: number, b: number): number {
	return a + b;
}

console.log(myFunction(3, 5));

let user: { name: string; age: number } = { name: 'Bob', age: 34 };

//
// ! CLASSES
import { type Locator, type Page } from '@playwright/test';
class LoginPage {
	page: Page;
	userName: Locator;
	password: Locator;
	signInButton: Locator;

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
