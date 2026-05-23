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
	testMatch: '**/*.spec.js',
	timeout: 30 * 1000, // timeout for the test

	retries: 1,
	// workers: 1,

	expect: {
		// * timeout for validations => expect
		timeout: 5 * 1000,
	},

	reporter: 'html',
	// reporter: [['line'], ['allure-playwright']],

	use: {
		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		browserName: 'chromium',
		headless: true,
		screenshot: 'on', //take picture every step
		trace: 'retain-on-failure', //tracing the steps
	},
});

// ? to export the variable
//module.export = config

// export default defineConfig({
//     testDir: './tests',

//     projects: [
//         {
//             name: 'API Tests',
//             testDir: './tests/api',
//         },
//         {
//             name: 'UI Basics',
//             testDir: './tests/ui/basics',
//         },
//         {
//             name: 'UI Advanced',
//             testDir: './tests/ui/advanced',
//         },
//         {
//             name: 'POM Tests',
//             testDir: './tests/pom',
//         },
//     ]
// });

// # Solo API
// npx playwright test tests/api

// # Solo POM
// npx playwright test tests/ui/pom

// # Solo un archivo
// npx playwright test tests/ui/basics/01-UIBasics-test.spec.js
