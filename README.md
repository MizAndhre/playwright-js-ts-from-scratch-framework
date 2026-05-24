# 🎭 Playwright JS/TS — From Scratch to Framework

[![Playwright](https://img.shields.io/badge/Playwright-1.60+-green?logo=playwright)](https://playwright.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18+-blue?logo=node.js)](https://nodejs.org)
[![BDD](https://img.shields.io/badge/BDD-Cucumber-red?logo=cucumber)](https://cucumber.io)

> 🇺🇸 [English](#-english) · 🇪🇸 [Español](#-español)

---

## 🇺🇸 English

Complete Playwright learning environment covering everything from basic testing to professional automation architectures. Based on Rahul Shetty Academy's Udemy course.

**App under test**: [EventHub](https://eventhub.rahulshettyacademy.com)

### 📦 Installation

```bash
npm install
npx playwright install
```

### 🧪 What You Learn

#### 1. UI Basics (`tests/ui/`)
Automation fundamentals: CSS and XPath selectors, modern locators (`getBy*`), interactions (click, fill, select), calendar handling, frames, dialogs, and visual testing with screenshots.

#### 2. API Testing (`tests/api/`)
REST requests with Playwright, session and storage management, network interception (mock, abort, request modification), and API-based authentication.

#### 3. Page Object Model — JavaScript (`tests/pom/`)
Scalable architecture with page classes, `PageObjectManager` as a factory, and Data-Driven Testing (DDT) using JSON files.

#### 4. Page Object Model — TypeScript (`tests/ts/pom-ts/`)
Same POM patterns with static typing, IDE autocompletion, and compile-time error detection.

#### 5. BDD with Cucumber (`tests/cucumber/`)
Executable specifications in business language using `.feature` files and JavaScript step definitions.

#### 6. Reporting (`allure-results/`, `playwright-report/`)
Professional reports with Allure (dashboard, history, attachments) and Playwright's native HTML reporter.

#### 7. Excel Testing (`tests/excel_utils/`)
Automation of Excel file workflows using ExcelJs: reading cell values, writing/modifying data, and a full Download → Modify → Upload → Validate cycle integrated into Playwright tests.

#### 8. Playwright Agents (`playwright-agent/`)
A separate subproject exploring AI-assisted testing with GitHub Copilot agents. Covers automatic test generation, intelligent debugging, test planning, and CI/CD integration via GitHub Actions — all applied to a TodoMVC app.

### 🎮 Main Commands

```bash
npm run regression         # Full test suite
npm run webTests           # UI tests (@Web)
npm run apiTests           # API tests (@Api)
npm run pomTests           # POM tests (@POM)
npm run cucumber           # BDD features
npm run allure:report      # Run + generate + open Allure report
npm run show:report        # Open Playwright HTML report
```

### 📋 Course Practice Tasks (`udemy-tasks/`)

| Task | Description |
|------|-------------|
| Task 1 | Create an event, book a ticket, and validate seat count decreases |
| Task 2 | Validate refund eligibility rules based on ticket quantity |
| Task 3 | Intercept and mock event API responses |
| Task 4 | E2E flow combining API authentication + UI validation |

```bash
cd udemy-tasks && npm test
```

### 🗺️ Recommended Learning Path

```
UI Basics → Modern Locators → Page Object Model → Data-Driven Testing
    → API Testing → Network Interception → BDD Cucumber → TypeScript POM
    → Excel Testing → Playwright Agents → Allure Reports
```

---

## 🇪🇸 Español

Entorno de aprendizaje completo de Playwright que cubre desde conceptos básicos hasta arquitecturas profesionales de testing. Basado en el curso de Udemy de Rahul Shetty Academy.

**Aplicación bajo prueba**: [EventHub](https://eventhub.rahulshettyacademy.com)

### 📦 Instalación

```bash
npm install
npx playwright install
```

### 🧪 Qué se aprende en el curso

#### 1. UI Basics (`tests/ui/`)
Fundamentos de automatización: selectores CSS y XPath, locators modernos (`getBy*`), interacciones (click, fill, select), manejo de calendarios, frames, diálogos y testing visual con screenshots.

#### 2. API Testing (`tests/api/`)
Peticiones REST con Playwright, gestión de sesiones y almacenamiento, intercepción de red (mock, abort, modificación de requests), y manejo de autenticación via API.

#### 3. Page Object Model — JavaScript (`tests/pom/`)
Arquitectura escalable con clases por página, `PageObjectManager` como factory, y Data-Driven Testing (DDT) con datos desde archivos JSON.

#### 4. Page Object Model — TypeScript (`tests/ts/pom-ts/`)
Los mismos patrones de POM con tipado estático, autocompletado en IDE y detección de errores en tiempo de compilación.

#### 5. BDD con Cucumber (`tests/cucumber/`)
Especificaciones ejecutables en lenguaje de negocio usando archivos `.feature` y step definitions en JavaScript.

#### 6. Reportes (`allure-results/`, `playwright-report/`)
Generación de reportes profesionales con Allure (dashboard, historial, adjuntos) y el reporter HTML nativo de Playwright.

#### 7. Excel Testing (`tests/excel_utils/`)
Automatización de flujos con archivos Excel usando ExcelJs: lectura de celdas, escritura y modificación de datos, y un ciclo completo de Descargar → Modificar → Subir → Validar integrado en tests de Playwright.

#### 8. Playwright Agents (`playwright-agent/`)
Subproyecto separado que explora testing asistido por IA con agentes de GitHub Copilot. Cubre generación automática de tests, depuración inteligente, planificación de pruebas e integración CI/CD via GitHub Actions — todo aplicado a una aplicación TodoMVC.

### 🎮 Comandos principales

```bash
npm run regression         # Suite completa
npm run webTests           # Tests UI (@Web)
npm run apiTests           # Tests API (@Api)
npm run pomTests           # Tests POM (@POM)
npm run cucumber           # Features BDD
npm run allure:report      # Ejecutar + generar + abrir reporte Allure
npm run show:report        # Abrir reporte HTML de Playwright
```

### 📋 Tareas prácticas del curso (`udemy-tasks/`)

| Tarea | Descripción |
|-------|-------------|
| Task 1 | Crear evento, reservar ticket y validar disminución de cupos |
| Task 2 | Validar elegibilidad de reembolso según cantidad de tickets |
| Task 3 | Interceptar y mockear respuestas de la API de eventos |
| Task 4 | Flujo E2E combinando autenticación API + validación UI |

```bash
cd udemy-tasks && npm test
```

### 🗺️ Ruta de aprendizaje recomendada

```
UI Basics → Locators Modernos → Page Object Model → Data-Driven Testing
    → API Testing → Intercepción de Red → BDD Cucumber → TypeScript POM
    → Excel Testing → Playwright Agents → Allure Reports
```

---

**Playwright v1.60+ · Node.js 18+ · Updated / Actualizado: May 2026**