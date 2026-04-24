// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */

// const config({})
export default defineConfig({
	testDir: './tests',
	timeout: 40 * 1000, // timeout for the test

	expect: {
		// * timeout for validations
		timeout: 40 * 1000,
	},

	reporter: 'html',

	use: {
		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		browserName: 'webkit',
		headless: false,
	},
});

// ? to export the variable
//module.export = config
