# 🎭 Playwright JS/TS — De Cero a Framework

[![Playwright](https://img.shields.io/badge/Playwright-1.60+-green?logo=playwright)](https://playwright.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18+-blue?logo=node.js)](https://nodejs.org)
[![BDD](https://img.shields.io/badge/BDD-Cucumber-red?logo=cucumber)](https://cucumber.io)

Entorno de aprendizaje completo de Playwright que cubre desde conceptos básicos hasta arquitecturas profesionales de testing. Basado en el curso de Udemy de Rahul Shetty Academy.

**Aplicación bajo prueba**: [EventHub](https://eventhub.rahulshettyacademy.com)

---

## 📦 Instalación

```bash
npm install
npx playwright install
```

---

## 🧪 Qué se aprende en el curso

### 1. UI Basics (`tests/ui/`)

Fundamentos de automatización: selectores CSS y XPath, locators modernos (`getBy*`), interacciones (click, fill, select), manejo de calendarios, frames, diálogos y testing visual con screenshots.

### 2. API Testing (`tests/api/`)

Peticiones REST con Playwright, gestión de sesiones y almacenamiento, intercepción de red (mock, abort, modificación de requests), y manejo de autenticación via API.

### 3. Page Object Model — JavaScript (`tests/pom/`)

Arquitectura escalable con clases por página, `PageObjectManager` como factory, y Data-Driven Testing (DDT) con datos desde archivos JSON.

### 4. Page Object Model — TypeScript (`tests/ts/pom-ts/`)

Los mismos patrones de POM con tipado estático, autocompletado en IDE y detección de errores en tiempo de compilación.

### 5. BDD con Cucumber (`tests/cucumber/`)

Especificaciones ejecutables en lenguaje de negocio usando archivos `.feature` y step definitions en JavaScript.

### 6. Reportes (`allure-results/`, `playwright-report/`)

Generación de reportes profesionales con Allure (dashboard, historial, adjuntos) y el reporter HTML nativo de Playwright.

### 7. Excel Testing (`tests/excel_utils/`)

Automatización de flujos con archivos Excel usando ExcelJs: lectura de celdas, escritura y modificación de datos, y un ciclo completo de Descargar → Modificar → Subir → Validar integrado en tests de Playwright.

### 8. Playwright Agents (`playwright-agent/`)

Subproyecto separado que explora testing asistido por IA con agentes de GitHub Copilot. Cubre generación automática de tests, depuración inteligente, planificación de pruebas e integración CI/CD via GitHub Actions — todo aplicado a una aplicación TodoMVC.

---

## 🎮 Comandos principales

```bash
npm run regression         # Suite completa
npm run webTests           # Tests UI (@Web)
npm run apiTests           # Tests API (@Api)
npm run pomTests           # Tests POM (@POM)
npm run cucumber           # Features BDD
npm run allure:report      # Ejecutar + generar + abrir reporte Allure
npm run show:report        # Abrir reporte HTML de Playwright
```

---

## 📋 Tareas prácticas del curso (`udemy-tasks/`)

| Tarea  | Descripción                                                  |
| ------ | ------------------------------------------------------------ |
| Task 1 | Crear evento, reservar ticket y validar disminución de cupos |
| Task 2 | Validar elegibilidad de reembolso según cantidad de tickets  |
| Task 3 | Interceptar y mockear respuestas de la API de eventos        |
| Task 4 | Flujo E2E combinando autenticación API + validación UI       |

```bash
cd udemy-tasks && npm test
```

---

## 🗺️ Ruta de aprendizaje recomendada

```
UI Basics → Locators Modernos → Page Object Model → Data-Driven Testing
    → API Testing → Intercepción de Red → BDD Cucumber → TypeScript POM
    → Excel Testing → Playwright Agents → Allure Reports
```

---

**Playwright v1.60+ · Node.js 18+ · Actualizado: Mayo 2026**
