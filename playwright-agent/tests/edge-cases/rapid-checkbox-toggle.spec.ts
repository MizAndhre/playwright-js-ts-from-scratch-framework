// spec: test-plans/todomvc-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Edge Cases and Error Handling', () => {
  test('should handle rapid checkbox toggling', async ({ page }) => {
    // Navigate to the TodoMVC application and add a todo
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    
    const input = page.locator('input[placeholder="What needs to be done?"]');
    await input.fill('Test todo');
    await input.press('Enter');

    // Verify the todo is displayed and unchecked
    const todoItem = page.locator('li').filter({ hasText: 'Test todo' });
    await expect(todoItem).toBeVisible();
    
    // Rapidly click the checkbox multiple times (10+ times) in quick succession
    const checkbox = page.locator('input[type="checkbox"]').first();
    for (let i = 0; i < 11; i++) {
      await checkbox.click();
    }

    // Verify the checkbox state toggles correctly and the final state is consistent with the last click
    await expect(checkbox).toBeChecked();
    
    // Verify the item count updates correctly (should be 0 since we ended with checked)
    await expect(page.locator('body')).toContainText('0 items left');
  });
});
