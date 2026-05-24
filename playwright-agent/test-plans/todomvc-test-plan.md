# TodoMVC Application Test Plan

## Application Overview

The TodoMVC application is a React-based todo list manager that allows users to create, edit, complete, and delete todo items. The application supports filtering between All, Active, and Completed todos, with functionality to mark all todos as complete and clear completed items. This test plan covers the core functionality and edge cases for comprehensive quality assurance.

## Test Scenarios

### 1. Adding Todos

**Seed:** `tests/seed.spec.ts`

#### 1.1. should add a single todo item

**File:** `tests/todos/add-single-todo.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application at https://demo.playwright.dev/todomvc/#/
    - expect: The application loads with an empty todo list and input field visible
    - expect: The input field shows placeholder text 'What needs to be done?'
    - expect: The item count shows '0 items left'
  2. Click on the input field and type 'Buy groceries'
    - expect: The text 'Buy groceries' appears in the input field
  3. Press Enter to add the todo
    - expect: The todo item 'Buy groceries' is added to the list
    - expect: The input field is cleared and ready for another entry
    - expect: The item count updates to '1 item left'

#### 1.2. should add multiple todo items

**File:** `tests/todos/add-multiple-todos.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application
    - expect: The application loads with an empty todo list
  2. Add the first todo 'First task' by typing and pressing Enter
    - expect: The first todo is added to the list
    - expect: Item count shows '1 item left'
  3. Add the second todo 'Second task' by typing and pressing Enter
    - expect: The second todo is added below the first one
    - expect: Item count shows '2 items left'
  4. Add the third todo 'Third task' by typing and pressing Enter
    - expect: The third todo is added to the list
    - expect: All three todos are visible in the correct order
    - expect: Item count shows '3 items left'

#### 1.3. should handle adding empty or whitespace-only todos

**File:** `tests/todos/add-empty-todo.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application
    - expect: The application loads successfully
  2. Click on the input field and press Enter without typing anything
    - expect: No todo item is created
    - expect: The list remains empty
    - expect: The item count shows '0 items left'
  3. Click on the input field and type only spaces, then press Enter
    - expect: No todo item is created
    - expect: The input field is cleared

#### 1.4. should accept special characters in todo text

**File:** `tests/todos/add-special-chars-todo.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application
    - expect: The application loads successfully
  2. Type a todo with special characters like 'Buy @$pecial items & gifts!' and press Enter
    - expect: The todo with special characters is added successfully
    - expect: All special characters are displayed correctly
    - expect: Item count updates to '1 item left'

### 2. Completing Todos

**Seed:** `tests/seed.spec.ts`

#### 2.1. should mark a todo as complete

**File:** `tests/todos/complete-single-todo.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add a todo 'Pay bills'
    - expect: The todo is added successfully
    - expect: The item shows as incomplete with an unchecked checkbox
    - expect: Item count shows '1 item left'
  2. Click the checkbox next to the 'Pay bills' todo
    - expect: The checkbox becomes checked
    - expect: The todo item appears with a strikethrough or different styling indicating completion
    - expect: Item count updates to '0 items left'

#### 2.2. should mark multiple todos as complete

**File:** `tests/todos/complete-multiple-todos.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add three todos: 'Task 1', 'Task 2', 'Task 3'
    - expect: All three todos are added successfully
    - expect: Item count shows '3 items left'
  2. Click the checkbox for 'Task 1'
    - expect: Task 1 is marked as complete
    - expect: Item count shows '2 items left'
  3. Click the checkbox for 'Task 3'
    - expect: Task 3 is marked as complete
    - expect: Item count shows '1 item left'
  4. Verify that Task 2 remains unchecked while Task 1 and Task 3 are checked
    - expect: Task 1 checkbox is checked
    - expect: Task 2 checkbox is unchecked
    - expect: Task 3 checkbox is checked

#### 2.3. should uncheck a completed todo

**File:** `tests/todos/uncheck-completed-todo.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add and complete a todo 'Test task'
    - expect: The todo is created and marked as complete
    - expect: Item count shows '0 items left'
  2. Click the checkbox again to uncheck it
    - expect: The checkbox becomes unchecked
    - expect: The todo is marked as incomplete
    - expect: Item count updates to '1 item left'

### 3. Editing Todos

**Seed:** `tests/seed.spec.ts`

#### 3.1. should edit a todo by double-clicking

**File:** `tests/todos/edit-todo.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add a todo 'Original text'
    - expect: The todo is added to the list
  2. Double-click on the todo text 'Original text'
    - expect: The todo item enters edit mode
    - expect: An input field appears with the current text 'Original text'
    - expect: The text is selected and editable
  3. Clear the input field and type 'Updated text'
    - expect: The edit field now contains 'Updated text'
  4. Press Enter to save the changes
    - expect: The edit mode closes
    - expect: The todo text is updated to 'Updated text'
    - expect: The todo remains in the list with the new text

#### 3.2. should cancel editing by pressing Escape

**File:** `tests/todos/edit-cancel-escape.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add a todo 'Original text'
    - expect: The todo is added to the list
  2. Double-click on the todo to enter edit mode
    - expect: Edit field appears with the original text
  3. Change the text to 'New text' and press Escape
    - expect: Edit mode closes without saving
    - expect: The todo text remains 'Original text'
    - expect: The changes are discarded

#### 3.3. should edit a completed todo

**File:** `tests/todos/edit-completed-todo.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application, add a todo, and mark it as complete
    - expect: The todo is created and checked
  2. Double-click on the completed todo to edit it
    - expect: Edit mode is activated
    - expect: The text can be modified
  3. Change the text to 'Edited completed task' and press Enter
    - expect: The edit is saved
    - expect: The todo remains marked as complete
    - expect: The new text is displayed

### 4. Deleting Todos

**Seed:** `tests/seed.spec.ts`

#### 4.1. should delete a todo

**File:** `tests/todos/delete-todo.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add todos 'Delete me' and 'Keep me'
    - expect: Both todos are added successfully
    - expect: Item count shows '2 items left'
  2. Hover over or find the delete button (X) for the 'Delete me' todo
    - expect: The delete button is visible or becomes visible on hover
  3. Click the delete button for 'Delete me'
    - expect: The 'Delete me' todo is removed from the list
    - expect: The 'Keep me' todo remains in the list
    - expect: Item count updates to '1 item left'

#### 4.2. should delete a completed todo

**File:** `tests/todos/delete-completed-todo.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application, add a todo, and mark it as complete
    - expect: The todo is created and marked as complete
  2. Click the delete button for the completed todo
    - expect: The completed todo is removed from the list
    - expect: Item count updates accordingly

#### 4.3. should delete all todos

**File:** `tests/todos/delete-all-todos.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add three todos
    - expect: All three todos are displayed
    - expect: Item count shows '3 items left'
  2. Click the delete button for the first todo
    - expect: The first todo is removed
  3. Click the delete button for the second todo
    - expect: The second todo is removed
  4. Click the delete button for the third todo
    - expect: The third todo is removed
    - expect: The list is now empty
    - expect: Item count shows '0 items left'

### 5. Filtering Todos

**Seed:** `tests/seed.spec.ts`

#### 5.1. should filter to show All todos

**File:** `tests/todos/filter-all.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add three todos: 'Task 1', 'Task 2', 'Task 3'
    - expect: All todos are displayed
  2. Mark 'Task 1' and 'Task 3' as complete
    - expect: Task 1 and Task 3 are checked
    - expect: Task 2 remains unchecked
  3. Click on the 'All' filter button
    - expect: All todos are displayed in the list
    - expect: Both completed and active todos are visible
    - expect: 'All' filter appears as selected/active

#### 5.2. should filter to show Active todos only

**File:** `tests/todos/filter-active.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add three todos: 'Task 1', 'Task 2', 'Task 3'
    - expect: All todos are displayed
  2. Mark 'Task 1' and 'Task 3' as complete
    - expect: Task 1 and Task 3 are checked
  3. Click on the 'Active' filter button
    - expect: Only 'Task 2' is displayed
    - expect: Completed todos are hidden from the view
    - expect: Item count shows '1 item left'
    - expect: 'Active' filter appears as selected

#### 5.3. should filter to show Completed todos only

**File:** `tests/todos/filter-completed.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add three todos: 'Task 1', 'Task 2', 'Task 3'
    - expect: All todos are displayed
  2. Mark 'Task 1' and 'Task 3' as complete
    - expect: Task 1 and Task 3 are checked
    - expect: Task 2 remains unchecked
  3. Click on the 'Completed' filter button
    - expect: Only 'Task 1' and 'Task 3' are displayed
    - expect: Uncompleted todos are hidden from the view
    - expect: 'Completed' filter appears as selected

#### 5.4. should show empty state when filtering for completed with no completed todos

**File:** `tests/todos/filter-completed-empty.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add two active todos without completing any
    - expect: Both todos are displayed and unchecked
  2. Click on the 'Completed' filter button
    - expect: No todos are displayed
    - expect: The list appears empty
    - expect: 'Completed' filter is selected

#### 5.5. should show empty state when filtering for active with all completed

**File:** `tests/todos/filter-active-empty.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add two todos
    - expect: Both todos are displayed
  2. Mark both todos as complete
    - expect: Both todos are checked
  3. Click on the 'Active' filter button
    - expect: No todos are displayed
    - expect: The list appears empty
    - expect: Item count shows '0 items left'

### 6. Mark All and Clear Completed

**Seed:** `tests/seed.spec.ts`

#### 6.1. should mark all todos as complete

**File:** `tests/todos/mark-all-complete.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add three todos: 'Task 1', 'Task 2', 'Task 3'
    - expect: All three todos are displayed and unchecked
    - expect: Item count shows '3 items left'
  2. Click the 'Mark all as complete' checkbox (the toggle in the header area)
    - expect: All three todos are marked as complete with checked checkboxes
    - expect: All todos appear with strikethrough styling
    - expect: Item count updates to '0 items left'
    - expect: 'Clear completed' button appears

#### 6.2. should unmark all todos when mark all is clicked twice

**File:** `tests/todos/unmark-all.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add two todos
    - expect: Both todos are displayed and unchecked
  2. Click the 'Mark all as complete' checkbox to mark all as complete
    - expect: Both todos are checked
    - expect: Item count shows '0 items left'
  3. Click the 'Mark all as complete' checkbox again to unmark all
    - expect: Both todos become unchecked
    - expect: Item count updates to '2 items left'
    - expect: 'Clear completed' button disappears if no completed todos

#### 6.3. should clear all completed todos

**File:** `tests/todos/clear-completed.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add three todos: 'Task 1', 'Task 2', 'Task 3'
    - expect: All three todos are displayed
  2. Mark 'Task 1' and 'Task 2' as complete
    - expect: Task 1 and Task 2 are checked
    - expect: Task 3 remains unchecked
    - expect: Item count shows '1 item left'
    - expect: 'Clear completed' button is visible
  3. Click the 'Clear completed' button
    - expect: Task 1 and Task 2 are removed from the list
    - expect: Only 'Task 3' remains
    - expect: Item count shows '1 item left'
    - expect: 'Clear completed' button disappears

#### 6.4. should not show Clear completed button when no todos are completed

**File:** `tests/todos/clear-completed-hidden.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add two active todos
    - expect: Both todos are displayed and unchecked
  2. Verify that the 'Clear completed' button is not visible
    - expect: 'Clear completed' button is not displayed on the page

### 7. UI and State Management

**Seed:** `tests/seed.spec.ts`

#### 7.1. should display correct item count in different states

**File:** `tests/todos/item-count.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application
    - expect: Item count shows '0 items left'
  2. Add a todo
    - expect: Item count shows '1 item left'
  3. Add another todo
    - expect: Item count shows '2 items left'
  4. Mark the first todo as complete
    - expect: Item count still shows '1 item left' (only active todos count)
  5. Delete the completed todo
    - expect: Item count shows '1 item left'

#### 7.2. should display correct filter selection indicator

**File:** `tests/todos/filter-selection-indicator.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application
    - expect: 'All' filter appears to be selected by default
  2. Click on 'Active' filter
    - expect: 'Active' filter appears highlighted/selected
    - expect: 'All' filter is no longer highlighted
  3. Click on 'Completed' filter
    - expect: 'Completed' filter appears highlighted/selected
    - expect: 'Active' filter is no longer highlighted

#### 7.3. should handle rapid todo additions

**File:** `tests/todos/rapid-additions.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application
    - expect: Application loads successfully
  2. Quickly add five todos in succession without delays
    - expect: All five todos are added successfully
    - expect: The order is maintained
    - expect: Item count shows '5 items left'

#### 7.4. should maintain state after filter changes

**File:** `tests/todos/state-after-filter.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add three todos: 'Task 1', 'Task 2', 'Task 3'
    - expect: All todos are displayed
  2. Mark 'Task 2' as complete
    - expect: Task 2 is checked
  3. Click on 'Active' filter to show only active todos
    - expect: Only 'Task 1' and 'Task 3' are displayed
  4. Click on 'All' filter to return to all todos
    - expect: All three todos are displayed again
    - expect: Task 2 remains marked as complete

### 8. Edge Cases and Error Handling

**Seed:** `tests/seed.spec.ts`

#### 8.1. should handle very long todo text

**File:** `tests/todos/long-todo-text.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application
    - expect: Application loads successfully
  2. Type a very long todo text (100+ characters) and press Enter
    - expect: The entire long text is added as a todo
    - expect: The text is displayed correctly (may wrap on multiple lines)
    - expect: Item count updates correctly

#### 8.2. should handle unicode and emoji characters

**File:** `tests/todos/unicode-emoji.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application
    - expect: Application loads successfully
  2. Add a todo with emoji and unicode characters like '買い物 🛒 café'
    - expect: The todo with unicode and emoji is added successfully
    - expect: All characters are displayed correctly

#### 8.3. should prevent duplicate todo prevention

**File:** `tests/todos/duplicate-todos.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add a todo 'Duplicate task'
    - expect: The first 'Duplicate task' is added
  2. Add another todo with identical text 'Duplicate task'
    - expect: The second todo with the same text is also added (duplicates are allowed)
    - expect: Item count shows '2 items left'
    - expect: Both todos are displayed in the list

#### 8.4. should handle rapid checkbox toggling

**File:** `tests/todos/rapid-checkbox-toggle.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add a todo
    - expect: The todo is displayed and unchecked
  2. Rapidly click the checkbox multiple times (10+ times) in quick succession
    - expect: The checkbox state toggles correctly
    - expect: The final state is consistent with the last click
    - expect: The item count updates correctly

#### 8.5. should handle edit cancellation by clicking outside

**File:** `tests/todos/edit-cancel-outside.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC application and add a todo 'Original'
    - expect: The todo is displayed
  2. Double-click on the todo to enter edit mode
    - expect: Edit input appears
  3. Modify the text to 'Modified' but then click outside the edit field
    - expect: Edit mode closes
    - expect: The todo text reverts to 'Original'
    - expect: Changes are not saved
