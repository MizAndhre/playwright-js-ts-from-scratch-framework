import { test, expect } from '@playwright/test';
import { PageObjectManager } from './pages/PageObjectManager';
// Import JSON data -> string -> Object
const dataSet = JSON.parse(JSON.stringify(require('./data/placeOrderTestDataParameterize.json')));

// ? Wrapping the test in a loop to iterate over the data set
for (const data of dataSet) {
	// ? Dinamically change the name of the test
	test(`@POM should login, select product, order and verify the order for ${data.email} `, async ({
		page,
	}) => {
		const POM = new PageObjectManager(page);

		//  LOGIN
		const loginPage = POM.getLoginPage();
		await loginPage.goTo();
		// ? Pass the email and password from the JSON data
		await loginPage.login(data.email, data.password);

		// DASHBOARD
		const dashboardPage = POM.getdashboardPage();
		await dashboardPage.waitLoading();
		// Get a random product, search it and add it to cart
		const productName = await dashboardPage.getRandomProduct();
		console.log('Este es el product name', productName);
		await dashboardPage.searchProductAddToCart(productName);
		//  Check if the product is in the cart
		await dashboardPage.navigateToCart();
		await page.waitForLoadState('networkidle');
		await expect(page.getByText(productName)).toBeVisible();

		// CHECKOUT
		const cartPage = POM.getCartPage();
		await cartPage.goToCheckout();
		const checkoutPage = POM.getCheckoutPage();
		await checkoutPage.fillAndSelectCountry();
		// Assert email
		await expect(checkoutPage.emailLabel).toHaveText(data.email);
		await checkoutPage.goToPlaceOrder();

		// ORDER
		const orderPage = POM.getOrderPage();
		// assert order message
		await expect(orderPage.title).toHaveText(' Thankyou for the order. ');
		const orderId = await orderPage.getOrderId();

		// ORDERS HISTORY
		await orderPage.goToOrdersHistory();
		const orderHistoryPage = POM.getOrderHistoryPage();
		await expect(orderHistoryPage.title).toHaveText('Your Orders');
		// assert the order id to be visible
		await expect(orderHistoryPage.getOrderIdRow(orderId)).toBeVisible();
		await orderHistoryPage.searchOrderClickViewDetails(orderId);

		// ORDER DETAILS
		const orderDetailsPage = POM.getOrderDetailsPage();
		await expect(orderDetailsPage.orderId).toContainText(orderId);
	});
}
