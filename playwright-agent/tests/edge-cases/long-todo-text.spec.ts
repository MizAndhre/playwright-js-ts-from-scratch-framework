// spec: test-plans/todomvc-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Edge Cases and Error Handling', () => {
	test('should handle very long todo text', async ({ page }) => {
		// Navigate to the TodoMVC application
		await page.goto('https://demo.playwright.dev/todomvc/#/');

		// Type a very long todo text (100+ characters) and press Enter
		const longText =
			'This is a very long todo item that exceeds one hundred characters to test if the application handles lengthy text properly and displays it correctly without truncation or wrapping issues';
		const input = page.locator('input[placeholder="What needs to be done?"]');
		await input.fill(longText);
		await input.press('Enter');

		// Verify the entire long text is added as a todo
		const todoItem = page.locator('li').filter({ hasText: longText });
		await expect(todoItem).toBeVisible();

		// Verify the text is displayed correctly (may wrap on multiple lines)
		const todoLabel = todoItem.locator('label[data-testid="todo-title"]');
		await expect(todoLabel).toContainText(longText);

		// Verify item count updates correctly
		await expect(page.locator('body')).toContainText('1 item left');
	});
});
