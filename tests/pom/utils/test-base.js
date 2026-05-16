// const base = require('@playwright/test');
import { test as base } from '@playwright/test';

// exports.customTest = base.test.extend({
export const customTest = base.extend({
	testDataForOrder: {
		username: 'Andhre',
		password: '12345678Aa*',
		email: 'andhre2@test.com',
	},
});
