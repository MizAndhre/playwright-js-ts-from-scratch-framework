# 🎭 Playwright JS/TS — From Scratch to Framework

[![Playwright](https://img.shields.io/badge/Playwright-1.60+-green?logo=playwright)](https://playwright.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18+-blue?logo=node.js)](https://nodejs.org)
[![BDD](https://img.shields.io/badge/BDD-Cucumber-red?logo=cucumber)](https://cucumber.io)

Complete Playwright learning environment covering everything from basic testing to professional automation architectures. Based on Rahul Shetty Academy's Udemy course.

**App under test**: [EventHub](https://eventhub.rahulshettyacademy.com)

---

## 📦 Installation

```bash
npm install
npx playwright install
```

---

## 🧪 What You Learn

### 1. UI Basics (`tests/ui/`)

Automation fundamentals: CSS and XPath selectors, modern locators (`getBy*`), interactions (click, fill, select), calendar handling, frames, dialogs, and visual testing with screenshots.

### 2. API Testing (`tests/api/`)

REST requests with Playwright, session and storage management, network interception (mock, abort, request modification), and API-based authentication.

### 3. Page Object Model — JavaScript (`tests/pom/`)

Scalable architecture with page classes, `PageObjectManager` as a factory, and Data-Driven Testing (DDT) using JSON files.

### 4. Page Object Model — TypeScript (`tests/ts/pom-ts/`)

Same POM patterns with static typing, IDE autocompletion, and compile-time error detection.

### 5. BDD with Cucumber (`tests/cucumber/`)

Executable specifications in business language using `.feature` files and JavaScript step definitions.

### 6. Reporting (`allure-results/`, `playwright-report/`)

Professional reports with Allure (dashboard, history, attachments) and Playwright's native HTML reporter.

### 7. Excel Testing (`tests/excel_utils/`)

Automation of Excel file workflows using ExcelJs: reading cell values, writing/modifying data, and a full Download → Modify → Upload → Validate cycle integrated into Playwright tests.

### 8. Playwright Agents (`playwright-agent/`)

A separate subproject exploring AI-assisted testing with GitHub Copilot agents. Covers automatic test generation, intelligent debugging, test planning, and CI/CD integration via GitHub Actions — all applied to a TodoMVC app.

---

## 🎮 Main Commands

```bash
npm run regression         # Full test suite
npm run webTests           # UI tests (@Web)
npm run apiTests           # API tests (@Api)
npm run pomTests           # POM tests (@POM)
npm run cucumber           # BDD features
npm run allure:report      # Run + generate + open Allure report
npm run show:report        # Open Playwright HTML report
```

---

## 📋 Course Practice Tasks (`udemy-tasks/`)

| Task   | Description                                                       |
| ------ | ----------------------------------------------------------------- |
| Task 1 | Create an event, book a ticket, and validate seat count decreases |
| Task 2 | Validate refund eligibility rules based on ticket quantity        |
| Task 3 | Intercept and mock event API responses                            |
| Task 4 | E2E flow combining API authentication + UI validation             |

```bash
cd udemy-tasks && npm test
```

---

## 🗺️ Recommended Learning Path

```
UI Basics → Modern Locators → Page Object Model → Data-Driven Testing
    → API Testing → Network Interception → BDD Cucumber → TypeScript POM
    → Excel Testing → Playwright Agents → Allure Reports
```

---

**Playwright v1.60+ · Node.js 18+ · Updated: May 2026**
