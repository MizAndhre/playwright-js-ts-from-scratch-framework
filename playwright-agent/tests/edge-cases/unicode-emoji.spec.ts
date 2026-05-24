// spec: test-plans/todomvc-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Edge Cases and Error Handling', () => {
	test('should handle unicode and emoji characters', async ({ page }) => {
		// Navigate to the TodoMVC application
		await page.goto('https://demo.playwright.dev/todomvc/#/');

		// Add a todo with emoji and unicode characters like '買い物 🛒 café'
		const unicodeText = '買い物 🛒 café';
		const input = page.locator('input[placeholder="What needs to be done?"]');
		await input.fill(unicodeText);
		await input.press('Enter');

		// Verify the todo with unicode and emoji is added successfully
		const todoItem = page.locator('li').filter({ hasText: unicodeText });
		await expect(todoItem).toBeVisible();

		// Verify all characters are displayed correctly
		const todoLabel = todoItem.locator('label[data-testid="todo-title"]');
		await expect(todoLabel).toContainText(unicodeText);
	});
});
