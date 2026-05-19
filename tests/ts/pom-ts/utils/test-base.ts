// const base = require('@playwright/test');
import { test as baseTest } from '@playwright/test';

// type TestDataForOrder = {
// 	username: string;
// 	password: string;
// 	email: string;
// };

interface TestDataForOrder {
	username: string;
	password: string;
	email: string;
}

export const customTest = baseTest.extend<{ testDataForOrder: TestDataForOrder }>({
	testDataForOrder: {
		username: 'Andhre',
		password: '12345678Aa*',
		email: 'andhre2@test.com',
	},
});
