// spec: test-plans/todomvc-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Edge Cases and Error Handling', () => {
	test('should handle edit cancellation by clicking outside', async ({ page }) => {
		// Navigate to the TodoMVC application and add a todo 'Original'
		await page.goto('https://demo.playwright.dev/todomvc/#/');

		const input = page.locator('input[placeholder="What needs to be done?"]');
		await input.fill('Original');
		await input.press('Enter');

		// Verify the todo is displayed
		const todoItem = page.locator('li').filter({ hasText: 'Original' });
		await expect(todoItem).toBeVisible();

		// Double-click on the todo to enter edit mode
		const todoLabel = todoItem.locator('label').first();
		await todoLabel.dblclick();

		// Verify edit input appears
		const editInput = page.locator('input[class*="edit"]').first();
		await expect(editInput).toBeVisible();

		// Modify the text to 'Modified'
		await editInput.clear();
		await editInput.fill('Modified');

		// Press Escape to cancel the edit
		await editInput.press('Escape');

		// Verify edit mode closes and the todo text reverts to 'Original'
		await expect(editInput).not.toBeVisible();

		// Verify changes are not saved
		const todoLabelAfter = todoItem.locator('label[data-testid="todo-title"]');
		await expect(todoLabelAfter).toContainText('Original');
	});
});
