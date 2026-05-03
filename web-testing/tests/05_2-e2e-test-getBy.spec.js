import { test, expect } from '@playwright/test';

test('should login and find the element', async ({ page }) => {
	await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

	//? LOGIN
	const username = 'Andhre';
	const password = '12345678Aa*';
	const email = 'andhre2@test.com';

	await page.getByPlaceholder('email@example.com').fill(email);
	await page.getByPlaceholder('enter your passsword').fill(password);
	await page.getByRole('button', { name: 'Login' }).click();

	// ? Wait for the products to load
	await page.locator('.card-body b').first().waitFor();

	// ! Dinamically select one of the titles
	const titles = await page.locator('.card-body b').allTextContents();
	console.log(titles);
	const randomIndex = Math.floor(Math.random() * titles.length);
	const randomProduct = titles[randomIndex];
	console.log('Selected random product:', randomProduct);

	// ? Find the product
	const product = await page.locator('.card-body').filter({ hasText: randomProduct });
	await product.getByRole('button', { name: 'Add To Cart' }).click();

	// ? Check if the product is in the cart
	await page.getByRole('listitem').getByRole('button', { name: 'Cart' }).click();
	//wait for the items to show up
	await page.locator('div li').first().waitFor();
	await expect(page.getByText(randomProduct)).toBeVisible();

	// ? Go to checkout
	await page.getByRole('button', { name: 'Checkout' }).click();
	// Fill Shipping info
	await page.getByPlaceholder('Select Country').pressSequentially('co', { delay: 150 });
	// select a country
	await page.getByRole('button', { name: 'Colombia' }).click();
	// Assert email
	expect(page.locator("label[type='text']")).toHaveText(email);

	// ? Go to Place Order
	await page.getByText('Place Order').click();
	// assert order message
	await expect(page.getByText(' Thankyou for the order. ')).toBeVisible();
	// Save OrderID
	const orderId = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
	const orderIdUpd = orderId.replace(/\|/g, '').trim();
	console.log(orderId, orderIdUpd);

	//? Go to Orders History
	await page.getByRole('button', { name: 'ORDERS' }).click();
	await page.locator('tbody').waitFor(); //wait to get the info
	await expect(page.getByText('Your Orders')).toBeVisible();

	const rowOrder = await page.getByRole('row').filter({ hasText: orderIdUpd });
	await rowOrder.getByRole('button', { name: 'View' }).click();

	// ? assertion
	await expect(page.getByText(orderIdUpd)).toBeVisible();
});
