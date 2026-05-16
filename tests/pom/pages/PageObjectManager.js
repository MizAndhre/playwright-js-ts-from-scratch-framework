import { CartPage } from './CartPage';
import { CheckoutPage } from './CheckoutPage';
import { DashboardPage } from './DashboardPage';
import { LoginPage } from './LoginPage';
import { OrderDetailsPage } from './OrderDetailsPage';
import { OrderPage } from './OrderPage';
import { OrderHistoryPage } from './OrdersHistoryPage';

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
