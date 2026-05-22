import { chromium } from '@playwright/test';
import { PageObjectManager } from '../../pages/PageObjectManager.js';
import { After, AfterStep, Before, BeforeStep, Status } from '@cucumber/cucumber';

let imageCount = 0;

Before(async function () {
	const browser = await chromium.launch({ headless: false }); //importing
	const context = await browser.newContext();
	this.page = await context.newPage();
	this.POM = new PageObjectManager(this.page);
});

BeforeStep({ tags: '@Validation or @Regression' }, function () {
	// This hook will be executed before all steps in a scenario with tag @foo

	console.log('Before step');
});

AfterStep(async function ({ result }) {
	// This hook will be executed after all steps, and take a screenshot on step failure
	if (result.status === Status.FAILED) {
		// this.driver.takeScreenshot();
		await this.page.screenshot({
			path: 'tests/cucumber/features/screenshots/screenshot-failed.png',
		});
	}

	imageCount++;
	await this.page.screenshot({
		path: `tests/cucumber/features/screenshots/screenshot-${imageCount}.png`,
	});
});

After(function () {
	console.log('The last thing');
});
