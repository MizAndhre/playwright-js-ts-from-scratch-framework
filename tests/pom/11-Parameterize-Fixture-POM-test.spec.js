import { test, expect } from '@playwright/test';
// ? Import customTest
import { customTest } from './utils/test-base.js';
import { PageObjectManager } from './pages/PageObjectManager.js';
// Import JSON data -> string -> Object
const dataSet = JSON.parse(JSON.stringify(require('./data/placeOrderTestDataParameterize.json')));

//? Send custom Fixture after page
customTest('should login and do checkout workflow ', async ({ page, testDataForOrder }) => {
	const POM = new PageObjectManager(page);

	//  LOGIN
	const loginPage = POM.getLoginPage();
	await loginPage.goTo();
	// ? Pass the email and password from the JSON data
	await loginPage.login(testDataForOrder.email, testDataForOrder.password);

	// DASHBOARD
	const dashboardPage = POM.getdashboardPage();
	await dashboardPage.waitLoading();
	// Get a random product, search it and add it to cart
	const productName = await dashboardPage.getRandomProduct();
	console.log('Este es el product name', productName);
	await dashboardPage.searchProductAddToCart(productName);
	//  Check if the product is in the cart
	await dashboardPage.navigateToCart();
	await expect(page.getByText(productName)).toBeVisible();

	// CHECKOUT
	const cartPage = POM.getCartPage();
	await cartPage.goToCheckout();
	const checkoutPage = POM.getCheckoutPage();
	await checkoutPage.fillAndSelectCountry();
	// Assert email
	await expect(checkoutPage.emailLabel).toHaveText(testDataForOrder.email);
});
