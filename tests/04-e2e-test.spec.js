import { test, expect } from '@playwright/test';

test('should login and find the element', async ({ page }) => {
	await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

	//? LOGIN
	const username = 'Andhre';
	const password = '12345678Aa*';
	const email = 'andhre2@test.com';

	await page.getByPlaceholder('email@example.com').fill(email);
	await page.locator('#userPassword').fill(password);
	await page.locator("[value='Login']").click();

	// ? Wait for the products to load
	// await page.waitForLoadState('networkidle'); // DISCOURAGED
	await page.locator('.card-body b').first().waitFor(); //? wait for works with only one element
	const titles = await page.locator('.card-body b').allTextContents();
	console.log(titles);

	// ! Dinamically select one of the titles
	// use a math random and max floor  function and store the info in productName
	const randomIndex = Math.floor(Math.random() * titles.length);
	const randomProduct = titles[randomIndex];
	console.log('Selected random product', randomProduct);

	// ? Dinamically find a product a card
	const products = page.locator('div.card-body');
	const count = await products.count();
	// const productName = 'ZARA COAT 3';
	const productName = randomProduct;

	for (let i = 0; i < count; i++) {
		let product = await products.nth(i).locator('b').textContent();
		if (product === productName) {
			// add product to cart
			await products.nth(i).getByText('Add To Cart').click();
			break;
		}
	}

	// ? Check if the product is in the cart
	await page.locator('[routerlink="/dashboard/cart"]').click();
	//wait for the items to show up
	await page.locator('div li').first().waitFor();

	const isProductInCart = await page.locator(`h3:has-text('${productName}')`).isVisible();
	expect(isProductInCart).toBeTruthy();

	// ? Go to checkout
	await page.getByText('Checkout', { exact: true }).click();
	//Fill personal info

	// Fill Shipping info
	await page.getByPlaceholder('Select Country').pressSequentially('co', { delay: 150 });
	const countryDropdown = page.locator('.ta-results');

	await countryDropdown.first().waitFor();
	// await countryDropdown.getByText('Colombia', { exact: true }).click(); // *my way

	//second way of selecting an element
	const optionsCount = await countryDropdown.locator('button').count();
	for (let i = 0; i < optionsCount; i++) {
		let country = countryDropdown.locator('button').nth(i);
		let countryName = await country.textContent();
		let countryNameTrim = countryName.trim();

		if (countryNameTrim === 'Colombia') {
			await country.click();
			break;
		}
	}

	// Assert email
	expect(page.locator("label[type='text']")).toHaveText(email);
	expect(page.locator(".user__name [type='text']").first()).toHaveText(email);

	// ? Go to Place Order
	await page.locator('.action__submit').click();
	// assert order message
	await expect(page.locator('h1.hero-primary')).toHaveText(' Thankyou for the order. ');
	//
	const orderId = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
	const orderIdUpd = orderId.replace(/\|/g, '').trim();
	console.log(orderId, orderIdUpd);

	//? Go to Orders
	await page.locator('[routerlink="/dashboard/myorders"]').first().click();
	await page.locator('tbody').waitFor(); //wait to get the info
	await expect(page.locator('h1')).toHaveText('Your Orders');

	// *my own assert just the order id to be visible
	await expect(page.locator('th').filter({ hasText: orderIdUpd })).toBeVisible();

	const allRows = await page.locator('tbody tr');
	const allRowsCount = await allRows.count();

	for (let i = 0; i < allRowsCount; i++) {
		let row = allRows.nth(i).locator('th');
		let rowOrderId = await row.textContent();

		if (orderId.includes(rowOrderId)) {
			await allRows.nth(i).getByRole('button', { name: 'View' }).click();
			break;
		}
	}

	// ? assertion
	const orderIdDetails = await page.locator('.col-text.-main').textContent();
	expect(orderId.includes(orderIdDetails)).toBeTruthy();
});
