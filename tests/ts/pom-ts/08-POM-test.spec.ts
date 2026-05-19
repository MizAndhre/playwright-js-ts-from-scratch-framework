import { test, expect } from '@playwright/test';
// ? Page Object Manager
import { PageObjectManager } from './pages/PageObjectManager';
// ? Individual Pages
// import { LoginPage } from './pages/LoginPage';

test('should login and find the element', async ({ page }) => {
	const POM = new PageObjectManager(page);

	// ? Instance login page
	// const loginPage = new LoginPage(page);
	// ? LOGIN
	const loginPage = POM.getLoginPage();
	const username = 'Andhre';
	const password = '12345678Aa*';
	const email = 'andhre2@test.com';
	await loginPage.goTo();
	await loginPage.login(email, password);

	//? DASHBOARD
	const dashboardPage = POM.getdashboardPage();
	await dashboardPage.waitLoading();
	// Get a random product, search it and add it to cart
	const productName = await dashboardPage.getRandomProduct();
	console.log('Este es el product name', productName);
	await dashboardPage.searchProductAddToCart(productName);
	//  Check if the product is in the cart
	await dashboardPage.navigateToCart();
	await expect(page.getByText(productName)).toBeVisible();

	//? CHECKOUT
	const cartPage = POM.getCartPage();
	await cartPage.goToCheckout();
	const checkoutPage = POM.getCheckoutPage();
	await checkoutPage.fillAndSelectCountry();
	// Assert email
	await expect(checkoutPage.emailLabel).toHaveText(email);
	await checkoutPage.goToPlaceOrder();

	//? ORDER
	const orderPage = POM.getOrderPage();
	// assert order message
	await expect(orderPage.title).toHaveText(' Thankyou for the order. ');
	const orderId = await orderPage.getOrderId();

	/// ? ORDERS HISTORY
	await orderPage.goToOrdersHistory();
	const orderHistoryPage = POM.getOrderHistoryPage();
	await expect(orderHistoryPage.title).toHaveText('Your Orders');
	// assert the order id to be visible
	await expect(orderHistoryPage.getOrderIdRow(orderId)).toBeVisible();
	await orderHistoryPage.searchOrderClickViewDetails(orderId);

	//? ORDER DETAILS
	const orderDetailsPage = POM.getOrderDetailsPage();
	// assert ID is correct
	await expect(orderDetailsPage.orderId).toContainText(orderId);
});
