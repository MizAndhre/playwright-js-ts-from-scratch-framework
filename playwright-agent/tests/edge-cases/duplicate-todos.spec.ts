// spec: test-plans/todomvc-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Edge Cases and Error Handling', () => {
  test('should prevent duplicate todo prevention', async ({ page }) => {
    // Navigate to the TodoMVC application and add a todo 'Duplicate task'
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    
    const input = page.locator('input[placeholder="What needs to be done?"]');
    await input.fill('Duplicate task');
    await input.press('Enter');

    // Add another todo with identical text 'Duplicate task'
    await input.fill('Duplicate task');
    await input.press('Enter');

    // Verify the second todo with the same text is also added (duplicates are allowed)
    const duplicateItems = page.locator('li').filter({ hasText: 'Duplicate task' });
    await expect(duplicateItems).toHaveCount(2);
    
    // Verify item count shows '2 items left'
    await expect(page.locator('body')).toContainText('2 items left');
  });
});
