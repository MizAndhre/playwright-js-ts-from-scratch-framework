import { Given, Then, When } from '@cucumber/cucumber';
import { expect, chromium } from '@playwright/test';
import { PageObjectManager } from '../../pages/PageObjectManager.js';
// import playwright from '@playwright/test'; //to open the browser

// const { Given, Then, When } = require('@cucumber/cucumber');
// const { expect } = require('@playwright/test');
// const { PageObjectManager } = require('../../../pom/pages/PageObjectManager');
// const playwright = require('@playwright/test');

Given(
	'the user logs into the application with {string} and {string}',
	async function (email, password) {
		// Write code here that turns the phrase above into concrete actions
		// const browser = await playwright.chromium.launch(); //importing
		// const browser = await chromium.launch({ headless: false }); //importing
		// const context = await browser.newContext();
		// this.page = await context.newPage();
		// this.POM = new PageObjectManager(this.page);

		// ? LOGIN
		//World constructor => can be used in the other steps
		const loginPage = this.POM.getLoginPage();
		await loginPage.goTo();
		this.email = email;
		await loginPage.login(this.email, password);
	},
);

When('an item is added to the cart', async function () {
	// Write code here that turns the phrase above into concrete actions

	//? DASHBOARD
	this.dashboardPage = this.POM.getdashboardPage();
	await this.dashboardPage.waitLoading();
	// Get a random product, search it and add it to cart
	this.productName = await this.dashboardPage.getRandomProduct();
	console.log('Este es el product name', this.productName);
	await this.dashboardPage.searchProductAddToCart(this.productName);
});

Then('the product should be displayed in the cart', async function () {
	// Write code here that turns the phrase above into concrete actions

	// ? Check if the product is in the cart
	await this.dashboardPage.navigateToCart();
	await expect(this.page.getByText(this.productName)).toBeVisible();
});

When('the user enters valid details and places the order', async function () {
	// Write code here that turns the phrase above into concrete actions

	//? CHECKOUT
	const cartPage = this.POM.getCartPage();
	await cartPage.goToCheckout();
	const checkoutPage = this.POM.getCheckoutPage();
	await checkoutPage.fillAndSelectCountry();
	// Assert email
	await expect(checkoutPage.emailLabel).toHaveText(this.email);
	await checkoutPage.goToPlaceOrder();

	// ORDER
	this.orderPage = this.POM.getOrderPage();
	// assert order message
	await expect(this.orderPage.title).toHaveText(' Thankyou for the order. ');
	this.orderId = await this.orderPage.getOrderId();
});

Then('the order should be present in the Order History page', async function () {
	// Write code here that turns the phrase above into concrete actions

	//? ORDERS HISTORY
	await this.orderPage.goToOrdersHistory();
	const orderHistoryPage = this.POM.getOrderHistoryPage();
	await expect(orderHistoryPage.title).toHaveText('Your Orders');
	// assert the order id to be visible
	await expect(orderHistoryPage.getOrderIdRow(this.orderId)).toBeVisible();
	await orderHistoryPage.searchOrderClickViewDetails(this.orderId);

	// ORDER DETAILS
	const orderDetailsPage = this.POM.getOrderDetailsPage();
	await expect(orderDetailsPage.orderId).toContainText(this.orderId);
});

Given(
	'the user logs into the application2 with incorrect {string} and {string}',
	async function (email, password) {
		await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
		console.log(await this.page.title());

		const username = this.page.locator('input#username');
		await username.fill(email);
		await this.page.locator('#password').type(password); // type is depricated
		await this.page.locator('#signInBtn').click();
	},
);

Then('the user should see an error message', async function () {
	// Write code here that turns the phrase above into concrete actions
	const alert = await this.page.locator('div.alert.alert-danger.col-md-12');
	await expect(alert).toContainText('Incorrect');
	await expect(this.page.getByText('Incorrect username/password.')).toBeVisible();
});
