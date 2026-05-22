import { CartPage } from './CartPage.js';
import { CheckoutPage } from './CheckoutPage.js';
import { DashboardPage } from './DashboardPage.js';
import { LoginPage } from './LoginPage.js';
import { OrderDetailsPage } from './OrderDetailsPage.js';
import { OrderPage } from './OrderPage.js';
import { OrderHistoryPage } from './OrdersHistoryPage.js';

export class PageObjectManager {
	constructor(page) {
		this.page = page;
		this.loginPage = new LoginPage(this.page);
		this.dashboardPage = new DashboardPage(this.page);
		this.cartPage = new CartPage(this.page);
		this.checkoutPage = new CheckoutPage(this.page);
		this.orderPage = new OrderPage(this.page);
		this.orderHistoryPage = new OrderHistoryPage(this.page);
		this.orderDetailsPage = new OrderDetailsPage(this.page);
	}

	getLoginPage() {
		return this.loginPage;
	}

	getdashboardPage() {
		return this.dashboardPage;
	}

	getCartPage() {
		return this.cartPage;
	}

	getCheckoutPage() {
		return this.checkoutPage;
	}

	getOrderPage() {
		return this.orderPage;
	}

	getOrderHistoryPage() {
		return this.orderHistoryPage;
	}

	getOrderDetailsPage() {
		return this.orderDetailsPage;
	}
}
