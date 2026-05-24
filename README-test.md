# 🎭 Playwright Testing Framework - Curso Completo

[![Playwright](https://img.shields.io/badge/Playwright-%231.60+-green?logo=playwright)](https://playwright.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18+-blue?logo=node.js)](https://nodejs.org)
[![JavaScript/TypeScript](https://img.shields.io/badge/Language-JS%20%7C%20TS-yellow?logo=javascript)](https://www.javascript.com)
[![BDD](https://img.shields.io/badge/BDD-Cucumber-red?logo=cucumber)](https://cucumber.io)

> **Proyecto educativo completo de Playwright** cubriendo desde testing básico hasta patrones avanzados como Page Object Model (POM), Data-Driven Testing (DDT), BDD con Cucumber, API testing, visual testing y reportes profesionales con Allure.

---

## 📋 Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Requisitos Previos](#requisitos-previos)
- [Instalación y Configuración](#instalación-y-configuración)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tipos de Tests](#tipos-de-tests)
- [Scripts de Ejecución](#scripts-de-ejecución)
- [Configuraciones de Playwright](#configuraciones-de-playwright)
- [Tareas del Curso (Udemy)](#tareas-del-curso-udemy)
- [Patrones y Mejores Prácticas](#patrones-y-mejores-prácticas)
- [Generación de Reportes](#generación-de-reportes)
- [Excel Testing](#excel-testing---guía-completa)
- [Troubleshooting](#troubleshooting)
- [Learning Path](#ruta-de-aprendizaje-recomendada)

---

## 🎯 Descripción General

Este proyecto es un **entorno de entrenamiento completo en Playwright** que te guía desde conceptos básicos hasta arquitecturas profesionales de testing. Incluye:

✅ **Testing de UI** - Localizadores, interacciones, validaciones visuales  
✅ **Testing de APIs** - Requests, mocking, interceptación de red  
✅ **Page Object Model** - Arquitectura escalable en JavaScript y TypeScript  
✅ **Data-Driven Testing** - Parametrización con JSON  
✅ **BDD/Cucumber** - Especificaciones de negocio ejecutables  
✅ **Excel Testing** - Lectura, escritura y validación de archivos Excel  
✅ **Reportes Profesionales** - Allure, HTML, Cucumber  
✅ **Paralelización** - Ejecución multi-worker

**Aplicación Objetivo**: [EventHub - Rahul Shetty Academy](https://eventhub.rahulshettyacademy.com)

---

## 📦 Requisitos Previos

- **Node.js** 18.0 o superior
- **npm** o **yarn** como gestor de paquetes
- **Git** (opcional, para control de versiones)
- **Navegadores**: Playwright descarga automáticamente Chromium, Firefox y WebKit

### Verificar instalación

```bash
node --version          # Debe ser v18 o superior
npm --version          # Debe ser 8 o superior
npx playwright --version   # Verifica instalación de Playwright
```

---

## 🚀 Instalación y Configuración

### 1. Clonar el Proyecto

```bash
git clone <repositorio>
cd 02-playwright-js-ts-from-scratch-framework
```

### 2. Instalar Dependencias

```bash
# Instalación principal
npm install

# Instalación de navegadores de Playwright
npx playwright install

# (Opcional) Instalar navegadores específicos
npx playwright install chromium
npx playwright install firefox
npx playwright install webkit
```

### 3. Instalar Dependencias de Tareas Adicionales

```bash
# Navega a la carpeta de tareas Udemy
cd udemy-tasks
npm install
cd ..
```

### 4. Configuración de Variables de Entorno (opcional)

Crea un archivo `.env` en la raíz del proyecto:

```env
BASE_URL=https://eventhub.rahulshettyacademy.com
API_BASE_URL=https://rahulshettyacademy.com
HEADLESS=false
SLOW_MO=100
DEBUG=false
```

---

## 📁 Estructura del Proyecto

```
playwright-js-ts-from-scratch-framework/
│
├── 📂 tests/                          # Carpeta principal de tests
│   ├── 📂 ui/                         # Tests de interfaz de usuario
│   │   ├── 01-UIBasics-test.spec.js
│   │   ├── 02-assignment-register-login.spec.js
│   │   ├── 03-UIBasics-test-2.spec.js
│   │   ├── 04-e2e-test.spec.js
│   │   ├── 05_1-locators-test.spec.js
│   │   ├── 05_2-e2e-test-getBy.spec.js
│   │   ├── 05_3-handle-calendars.spec.js
│   │   ├── 06-validate-frames-dialogs-more.spec.js
│   │   ├── 07-visual-testing-screenshots.spec.js
│   │   └── 📂 screenshot/             # Snapshots para comparación visual
│   │
│   ├── 📂 api/                        # Tests de API
│   │   ├── 01-web-api-1.spec.js
│   │   ├── 02-web-api-refactor.spec.js
│   │   ├── 03-web-api-session-storage.spec.js
│   │   ├── 04-web-api-intercept-network.spec.js
│   │   ├── 05-web-api-intercept-security.spec.js
│   │   ├── 06-web-api-intercept-abort.spec.js
│   │   ├── 📂 auth/                   # Utilitarios de autenticación
│   │   └── 📂 utilities/              # Clases reutilizables
│   │       └── ApiUtils.js            # Helpers para API testing
│   │
│   ├── 📂 pom/                        # Page Object Model - JavaScript
│   │   ├── 08-POM-test.spec.js
│   │   ├── 09-DDT-POM-test.spec.js    # Data-Driven Testing
│   │   ├── 10-Parameterize-POM-test.spec.js
│   │   ├── 11-Parameterize-Fixture-POM-test.spec.js
│   │   ├── 📂 pages/                  # Page Object Classes
│   │   │   ├── LoginPage.js
│   │   │   ├── CartPage.js
│   │   │   ├── CheckoutPage.js
│   │   │   └── PageObjectManager.js
│   │   ├── 📂 utils/                  # Funciones auxiliares
│   │   ├── 📂 data/                   # Datos de prueba JSON
│   │   │   ├── placeOrderTestData.json
│   │   │   └── placeOrderTestDataParameterize.json
│   │
│   ├── 📂 ts/                         # Tests en TypeScript
│   │   ├── demo.js
│   │   ├── demo1.ts
│   │   └── 📂 pom-ts/                 # POM - TypeScript
│   │       ├── 08-POM-test.spec.ts
│   │       ├── 09-DDT-POM-test.spec.ts
│   │       ├── 10-Parameterize-POM-test.spec.ts
│   │       ├── 11-Parameterize-Fixture-POM-test.spec.ts
│   │       ├── 📂 pages/              # Page Classes (TypeScript)
│   │       │   ├── LoginPage.ts
│   │       │   ├── CartPage.ts
│   │       │   ├── CheckoutPage.ts
│   │       │   └── PageObjectManager.ts
│   │       ├── 📂 utils/
│   │       └── 📂 data/
│   │
│   ├── 📂 excel_utils/                # Excel Testing - Lectura/Escritura
│   │   ├── excelDemo.js               # Demo básico de ExcelJs
│   │   ├── excelDemoRefactor.js       # Funciones refactorizadas (read/write)
│   │   └── upload-download.spec.js    # Test: Download → Modify → Upload → Validate
│   │
│   ├── 📂 cucumber/                   # BDD Testing con Cucumber
│   │   ├── 📂 features/               # Archivos .feature
│   │   │   ├── Ecommerce.feature
│   │   │   └── ErrorValidations.feature
│   │   ├── 📂 pages/                  # Page Objects para Cucumber
│   │   └── 📂 step_definitions/       # Implementación de pasos
│   │
│   └── UIBasics-Parallel.spec.js      # Test de paralelización
│
├── 📂 udemy-tasks/                    # Ejercicios prácticos del curso
│   ├── task-1.md                      # Event Booking con reserva de asientos
│   ├── task-2.md                      # Validar elegibilidad de reembolso
│   ├── task-3.md                      # Mocking de APIs (interceptación)
│   ├── task-4.md                      # Testing de API (autenticación)
│   ├── 📂 tests/
│   ├── 📂 playwright-report/
│   ├── 📂 test-results/
│   └── package.json
│
├── 📂 allure-results/                 # Datos crudos de Allure (generados)
├── 📂 allure-report/                  # Reporte Allure (generado)
├── 📂 playwright-report/              # Reporte HTML nativo (generado)
├── 📂 test-results/                   # Resultados detallados (generado)
│
├── 📄 playwright.config.js            # Configuración principal
├── 📄 playwright.config-2.js          # Configuración alternativa (multi-navegador)
├── 📄 playwright.service.config.js    # Configuración para servicios en nube
├── 📄 cucumber.json                   # Configuración Cucumber
├── 📄 package.json                    # Dependencias y scripts
├── 📄 package-lock.json
├── 📄 tsconfig.json                   # Configuración TypeScript (si aplica)
└── 📄 README.md                       # Este archivo

├── 📂 playwright-agent/               # Proyecto Agentes de Playwright (TodoMVC)
│   ├── 📂 .github/
│   │   ├── 📂 agents/                 # Agentes personalizados de GitHub Copilot
│   │   │   ├── playwright-test-generator.agent.md
│   │   │   ├── playwright-test-healer.agent.md
│   │   │   └── playwright-test-planner.agent.md
│   │   └── 📂 workflows/              # GitHub Actions Workflows
│   │       ├── playwright.yml
│   │       └── copilot-setup-steps.yml
│   ├── 📂 .playwright-mcp/            # Configuración MCP (Model Context Protocol)
│   ├── 📂 .vscode/                    # Configuración VS Code (mcp.json)
│   ├── 📂 tests/
│   │   ├── example.spec.ts
│   │   ├── seed.spec.ts
│   │   └── 📂 edge-cases/             # Tests de casos extremos
│   │       ├── duplicate-todos.spec.ts
│   │       ├── edit-cancel-outside.spec.ts
│   │       ├── long-todo-text.spec.ts
│   │       ├── rapid-checkbox-toggle.spec.ts
│   │       └── unicode-emoji.spec.ts
│   ├── 📂 specs/                      # Especificaciones de tests
│   ├── 📂 test-plans/                 # Planes de testing
│   │   └── todomvc-test-plan.md       # Plan detallado para TodoMVC
│   ├── 📄 playwright.config.ts        # Configuración Playwright TypeScript
│   └── 📄 package.json                # Dependencias agentes
```

### 🤖 Playwright Agents Folder

La carpeta `playwright-agent/` es un subproyecto separado enfocado en el uso de agentes de GitHub Copilot con Playwright. Incluye:

- `.github/agents/`: agentes personalizados para generar, sanar y planificar tests
- `.github/workflows/`: flujos de CI/CD y configuración de setup para agentes
- `.playwright-mcp/` y `.vscode/mcp.json`: configuración de Model Context Protocol
- `tests/`: pruebas de ejemplo y casos extremos para la aplicación TodoMVC
- `test-plans/`: planes de prueba detallados
- `playwright.config.ts`: configuración de Playwright en TypeScript

Este subproyecto demuestra cómo combinar:

- generación automática de tests
- debug inteligente y corrección de pruebas
- planificación y documentación de escenarios
- integración de agentes IA con flujos de testing

---

## 🧪 Tipos de Tests

### 1️⃣ UI Basics (`tests/ui/`)

Tests fundamentales de interfaz de usuario cubriendo:

| Archivo                                   | Tema                                          |
| ----------------------------------------- | --------------------------------------------- |
| `01-UIBasics-test.spec.js`                | Localizadores CSS, XPath y sus variantes      |
| `02-assignment-register-login.spec.js`    | Formularios de registro y login               |
| `03-UIBasics-test-2.spec.js`              | Interacciones avanzadas (click, fill, select) |
| `04-e2e-test.spec.js`                     | Flujo End-to-End completo                     |
| `05_1-locators-test.spec.js`              | Localizadores modernos (getBy\*)              |
| `05_2-e2e-test-getBy.spec.js`             | E2E con localizadores modernos                |
| `05_3-handle-calendars.spec.js`           | Calendarios y date pickers                    |
| `06-validate-frames-dialogs-more.spec.js` | Frames, diálogos y más elementos              |
| `07-visual-testing-screenshots.spec.js`   | Testing visual y snapshots                    |

**Ejecución:**

```bash
npx playwright test tests/ui/
npx playwright test tests/ui/01-UIBasics-test.spec.js  # Un archivo específico
```

### 2️⃣ API Testing (`tests/api/`)

Tests de endpoints REST, mocking y gestión de sesiones:

| Archivo                                 | Funcionalidad                            |
| --------------------------------------- | ---------------------------------------- |
| `01-web-api-1.spec.js`                  | Requests básicas con Playwright          |
| `02-web-api-refactor.spec.js`           | Refactorización de requests              |
| `03-web-api-session-storage.spec.js`    | Gestión de LocalStorage y SessionStorage |
| `04-web-api-intercept-network.spec.js`  | Interceptación de requests               |
| `05-web-api-intercept-security.spec.js` | Mocking de respuestas de seguridad       |
| `06-web-api-intercept-abort.spec.js`    | Abortar y modificar requests             |
| `auth/`                                 | Autenticación API                        |
| `utilities/ApiUtils.js`                 | Clase reutilizable con métodos helper    |

**Ejecución:**

```bash
npx playwright test tests/api/
npm run apiTests          # Con tag @Api
npm run apiTests:allure   # Con reporte Allure
```

### 3️⃣ Page Object Model - JavaScript (`tests/pom/`)

Arquitectura escalable de testing:

| Archivo                                    | Descripción                   |
| ------------------------------------------ | ----------------------------- |
| `08-POM-test.spec.js`                      | POM básico                    |
| `09-DDT-POM-test.spec.js`                  | Data-Driven Testing con JSON  |
| `10-Parameterize-POM-test.spec.js`         | Parametrización con fixtures  |
| `11-Parameterize-Fixture-POM-test.spec.js` | Fixtures avanzadas            |
| `pages/LoginPage.js`                       | Page Object - Login           |
| `pages/CartPage.js`                        | Page Object - Carrito         |
| `pages/CheckoutPage.js`                    | Page Object - Checkout        |
| `pages/PageObjectManager.js`               | Manager centralizado de pages |
| `data/placeOrderTestData.json`             | Datos de órdenes              |

**Estructura típica de Page Object:**

```javascript
// pages/LoginPage.js
class LoginPage {
	constructor(page) {
		this.page = page;
		this.email = '#email';
		this.password = '#password';
		this.loginBtn = '#login-button';
	}

	async login(email, password) {
		await this.page.fill(this.email, email);
		await this.page.fill(this.password, password);
		await this.page.click(this.loginBtn);
	}
}

module.exports = LoginPage;
```

**Ejecución:**

```bash
npx playwright test tests/pom/
npm run pomTests          # Con tag @POM
npx playwright test tests/pom/09-DDT-POM-test.spec.js  # DDT específico
```

### 4️⃣ TypeScript POM (`tests/ts/pom-ts/`)

Mismos patrones que JavaScript pero con tipado fuerte:

```bash
npx playwright test tests/ts/pom-ts/
npm run pomTs:allure      # Con reporte Allure
```

**Ventajas TypeScript:**

- ✅ Autocompletado en IDE
- ✅ Tipado estático de parámetros
- ✅ Detección de errores en tiempo de compilación
- ✅ Mejor mantenibilidad en proyectos grandes

### 5️⃣ BDD con Cucumber (`tests/cucumber/`)

Especificaciones ejecutables en lenguaje de negocio:

**Archivos Feature:**

```gherkin
# Ecommerce.feature
Feature: E-Commerce Workflows

  Scenario: Complete purchase with valid credentials
    Given User navigates to login page
    When User enters credentials
    And User clicks login button
    Then User is logged in successfully
```

**Step Definitions:** Implementación en `step_definitions/`

**Ejecución:**

```bash
npm run cucumber              # Todas las features
npm run cucumber:retry        # Con retry y paralelización
```

### 6️⃣ Paralelización (`UIBasics-Parallel.spec.js`)

Test optimizado para ejecutarse en múltiples workers:

```bash
npm run parallelFile          # Ejecuta con workers
```

### 7️⃣ Excel Testing (`tests/excel_utils/`)

Manipulación de archivos Excel para validación y automatización:

| Archivo                   | Descripción                                                          |
| ------------------------- | -------------------------------------------------------------------- |
| `excelDemo.js`            | Demo básico de lectura/escritura en Excel usando ExcelJs             |
| `excelDemoRefactor.js`    | Refactorización con funciones reutilizables (read y write)           |
| `upload-download.spec.js` | Test completo: descargar Excel, modificar contenido, subir y validar |

**Funcionalidades:**

#### 📥 Lectura de Excel

Buscar celdas específicas en un archivo Excel:

```javascript
async function readExcel(worksheet, searchText) {
	let output = { row: 0, column: 0 };

	worksheet.eachRow((row, rowNumber) => {
		row.eachCell((cell, colNumber) => {
			if (cell.value === searchText) {
				output.row = rowNumber;
				output.column = colNumber;
			}
		});
	});

	return output;
}
```

#### ✍️ Escritura en Excel

Modificar valores en celdas específicas:

```javascript
async function writeExcel(searchText, replaceText, filePath) {
	const workbook = new ExcelJs.Workbook();
	await workbook.xlsx.readFile(filePath);
	const worksheet = workbook.getWorksheet('Sheet1');

	const output = await readExcel(worksheet, searchText);
	const cell = worksheet.getCell(output.row, output.column);
	cell.value = replaceText;

	await workbook.xlsx.writeFile(filePath);
}
```

#### 🔄 Flujo Completo: Download → Modify → Upload → Validate

```javascript
test('should upload download excel validation', async ({ page }) => {
	// 1. Descargar Excel
	const downloadPromise = page.waitForEvent('download');
	await page.getByRole('button', { name: 'Download' }).click();
	const download = await downloadPromise;
	await download.saveAs('tests/excel_utils/download.xlsx');

	// 2. Modificar contenido
	await writeExcel('Mango', 500, 'tests/excel_utils/download.xlsx');

	// 3. Subir archivo modificado
	await page.locator('#fileinput').setInputFiles('tests/excel_utils/download.xlsx');

	// 4. Validar cambios en UI
	const getRowPrice = await page
		.getByRole('row')
		.filter({ hasText: 'Mango' })
		.locator('#cell-4-undefined')
		.innerText();

	expect(parseInt(getRowPrice)).toBe(500);
});
```

**Requisitos:**

- ExcelJs library (npm install exceljs)
- Acceso de lectura/escritura a archivos

**Ejecución:**

```bash
# Ejecutar test específico
npx playwright test tests/excel_utils/upload-download.spec.js

# Ejecutar script de demo
node tests/excel_utils/excelDemoRefactor.js
```

**Casos de Uso:**

- ✅ Validación de descargas de Excel
- ✅ Modificación de datos antes de subir
- ✅ Verificación de reportes generados
- ✅ Testing de integración con sistemas que usan Excel
- ✅ Automatización de procesos de entrada de datos

---

## 🎮 Scripts de Ejecución

### Tests Básicos

```bash
# Todos los tests
npm run regression              # Ejecuta suite completa
npm test                       # Alias de regression

# Tests por categoría
npm run webTests               # @Web tag
npm run apiTests               # @Api tag
npm run pomTests               # @POM tag

# Configuración específica
npm run safariConfig           # API tests en Safari
```

### Tests con Reportes

```bash
# Allure Reports
npm run apiTests:allure        # API tests + Allure reporter
npm run pomTs:allure           # POM TypeScript + Allure
npm run allure:generate        # Generar reporte desde resultados
npm run allure:open            # Abrir reporte en navegador
npm run allure:report          # Ejecutar + generar + abrir

# HTML Reports (nativo de Playwright)
npm run show:report            # Abre reporte HTML
```

### BDD Cucumber

```bash
npm run cucumber               # Ejecuta features
npm run cucumber:retry         # Con retry y paralelización
```

### Tareas Udemy

```bash
cd udemy-tasks
npm test                       # Ejecuta tests de tareas
npm run dev                    # Modo desarrollo
```

---

## ⚙️ Configuraciones de Playwright

### Configuración Principal (`playwright.config.js`)

```javascript
{
  testDir: './tests',
  timeout: 30 * 1000,           // 30 segundos por test
  expect: { timeout: 5000 },    // 5 segundos para expect
  retries: 1,                   // 1 reintento en caso de fallo
  workers: 4,                   // 4 workers paralelos

  use: {
    headless: true,             // Modo headless
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  },

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: false
  },

  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }]
  ]
}
```

### Configuración Multi-navegador (`playwright.config-2.js`)

Ejecuta tests en Chromium, Firefox y Safari con opciones específicas:

```javascript
{
	projects: [
		{
			name: 'Safari',
			use: { ...devices['Safari'] },
		},
		{
			name: 'Chrome',
			use: { ...devices['Desktop Chrome'], headless: false },
		},
	];
}
```

### Configuración para Servicios (`playwright.service.config.js`)

Para BrowserStack, LambdaTest, etc.

**Ejecutar con configuración personalizada:**

```bash
npx playwright test --config=playwright.config-2.js
npx playwright test --headed                    # Modo visual
npx playwright test --debug                     # Debug mode
npx playwright test --trace on                  # Grabación de traces
```

---

## 📋 Tareas del Curso (Udemy)

La carpeta `udemy-tasks/` contiene 4 ejercicios prácticos progresivos:

### Task 1: Event Booking 📅

**Objetivo**: Crear evento, reservar ticket y validar descenso de asientos.

**Pasos:**

1. Crear evento en panel admin
2. Reservar ticket desde otra cuenta
3. Verificar que asientos disponibles disminuyen
4. Validar confirmación de booking

```bash
cd udemy-tasks
npm test -- task-1
```

### Task 2: Refund Eligibility 💰

**Objetivo**: Validar reglas de elegibilidad de reembolso.

**Reglas:**

- 1 ticket → ✅ Elegible para reembolso
- 3+ tickets → ❌ NO elegible para reembolso

**Criterios:**

- Validar UI de reembolso
- Verificar mensaje apropiado según cantidad de tickets

### Task 3: API Mocking (Interception) 🔄

**Objetivo**: Interceptar y mockear respuestas de API.

**Escenarios:**

- Mockear endpoint `/api/events` retornando 6 eventos
- Mockear mismo endpoint retornando 4 eventos
- Validar que la UI refleja cambios

**Técnicas:**

```javascript
// Interceptar y modificar respuesta
await page.route('**/api/events', (route) => {
	route.abort(); // o route.continue(), route.fulfill()
});
```

### Task 4: API Testing 🧪

**Objetivo**: Testing de APIs con autenticación y bookings.

**Flujo:**

1. Autenticarse via API (login)
2. Obtener lista de eventos
3. Crear booking programáticamente
4. Validar que otro usuario puede ver el booking
5. Verificar persistencia de datos

**Operaciones HTTP:**

```javascript
// GET eventos
await request.get('/api/events');

// POST booking
await request.post('/api/bookings', { data: bookingData });

// Validaciones
expect(response.status()).toBe(200);
```

---

## 🏗️ Patrones y Mejores Prácticas

### 1. Page Object Model (POM)

**Ventajas:**

- Mantenibilidad: Cambios centralizados
- Reusabilidad: Métodos compartidos
- Claridad: Tests legibles

**Estructura recomendada:**

```
pages/
├── BasePage.js           # Clase base con métodos comunes
├── LoginPage.js
├── CartPage.js
├── CheckoutPage.js
├── PageObjectManager.js  # Factory pattern
└── ...
```

**Uso:**

```javascript
const { test, expect } = require('@playwright/test');
const LoginPage = require('./pages/LoginPage');

test('Login', async ({ page }) => {
	const loginPage = new LoginPage(page);
	await loginPage.navigate();
	await loginPage.login('user@example.com', 'password');
	await expect(page).toHaveURL('/dashboard');
});
```

### 2. Data-Driven Testing (DDT)

Usar fixtures y archivos JSON para múltiples conjuntos de datos:

```javascript
// data/testData.json
[
	{ email: 'user1@test.com', password: 'pass1', expected: 'success' },
	{ email: 'user2@test.com', password: 'pass2', expected: 'success' },
	{ email: 'invalid@test.com', password: 'wrong', expected: 'error' },
];

// test.spec.js
const data = require('./data/testData.json');

data.forEach(({ email, password, expected }) => {
	test(`Login with ${email}`, async ({ page }) => {
		// Test implementation
	});
});
```

### 3. Fixtures Playwright

Compartir estado entre tests:

```javascript
const { test: base, expect } = require('@playwright/test');

const test = base.extend({
	authenticatedPage: async ({ page }, use) => {
		// Setup: Login
		await page.goto('/login');
		await page.fill('#email', 'user@test.com');
		await page.fill('#password', 'password');
		await page.click('#loginBtn');

		// Use the authenticated page
		await use(page);

		// Teardown: Logout
		await page.click('#logoutBtn');
	},
});

test('Access dashboard', async ({ authenticatedPage }) => {
	await expect(authenticatedPage).toHaveURL('/dashboard');
});
```

### 4. API Testing Best Practices

```javascript
// ✅ Buenas prácticas
const { test, expect } = require('@playwright/test');

test('Create booking via API', async ({ request }) => {
	// Arrange
	const bookingData = {
		eventId: 1,
		userId: 2,
		quantity: 2,
	};

	// Act
	const response = await request.post('/api/bookings', {
		data: bookingData,
	});

	// Assert
	expect(response.status()).toBe(201);
	const booking = await response.json();
	expect(booking).toHaveProperty('bookingId');
});
```

### 5. Network Interception

```javascript
// Mockear respuestas
await page.route('**/api/**', (route) => {
	route.fulfill({
		status: 200,
		body: JSON.stringify({ data: 'mocked' }),
	});
});

// Abortar requests específicas
await page.route('**/analytics/**', (route) => route.abort());

// Modificar requests
await page.route('**/api/**', (route) => {
	const request = route.request();
	route.continue({
		headers: {
			...request.headers(),
			Authorization: 'Bearer new-token',
		},
	});
});
```

### 6. Visual Testing

```javascript
test('Visual regression', async ({ page }) => {
	await page.goto('/dashboard');

	// Comparar con baseline
	await expect(page).toHaveScreenshot('dashboard.png');

	// Captura parcial
	const header = page.locator('header');
	await expect(header).toHaveScreenshot('header.png');
});
```

---

## 📊 Generación de Reportes

### Allure Reports (Profesional)

**Requisitos:**

```bash
# Java debe estar instalado para generar reportes
java -version
```

**Workflow completo:**

```bash
# 1. Ejecutar tests con Allure reporter
npm run apiTests:allure

# 2. Generar reporte HTML desde resultados
npm run allure:generate

# 3. Ver reporte en navegador
npm run allure:open

# O todo en un comando
npm run allure:report
```

**Características Allure:**

- 📊 Dashboard interactivo
- 📈 Historial de ejecuciones
- 🏷️ Categorización de tests
- 📎 Adjuntos (screenshots, logs)
- 🔗 Trazabilidad (casos → requisitos)

### HTML Reports (Nativo Playwright)

```bash
# Ver reporte generado automáticamente
npm run show:report

# O manualmente
npx playwright show-report
```

### Cucumber Reports

Se genera automáticamente en `cucumber-report.html` durante ejecución.

---

## 🔍 Seleccionar y Ejecutar Tests Específicos

### Por nombre de test

```bash
npx playwright test -g "login"              # Contiene "login"
npx playwright test -g "validation.*error"  # Regex
```

### Por archivo

```bash
npx playwright test tests/api/01-web-api-1.spec.js
npx playwright test tests/pom/08-POM-test.spec.js
```

### Por tag

```bash
# Marcar tests con @tag
test('Login @critical @regression', async ({ page }) => { ... });

# Ejecutar por tag
npx playwright test --grep @critical
npx playwright test --grep @regression
```

### Por proyecto

```bash
npx playwright test --project=Chrome
npx playwright test --project=Safari
npx playwright test --project=Firefox
```

---

## 🛠️ Troubleshooting

### ❌ "Playwright is not installed"

```bash
npm install @playwright/test
npx playwright install
```

### ❌ Timeout en tests

Aumenta timeout en `playwright.config.js`:

```javascript
{
  timeout: 60 * 1000,        // 60 segundos
  expect: { timeout: 10000 } // 10 segundos
}
```

O en test específico:

```javascript
test('Slow test', async ({ page }) => {
	test.setTimeout(120000); // 2 minutos
	// ...
});
```

### ❌ "No browsers found"

```bash
npx playwright install chromium firefox webkit
```

### ❌ Tests fallan solo en CI

```javascript
// Usar headless: true
// Desactivar video en CI

// playwright.config.js
use: {
  headless: true,
  trace: 'on-first-retry',
  video: process.env.CI ? 'off' : 'on-failure'
}
```

### ❌ Screenshots no se generan

```bash
# Verificar configuración
use: {
  screenshot: 'only-on-failure',
  screenshotOnFailure: true
}

# Ver screenshots generados
npx playwright show-report
```

### ❌ Tests en paralelo causan conflictos

Usa fixtures para aislar estado:

```javascript
test.beforeEach(async ({ page }) => {
	// Setup independiente para cada test
	await page.goto('/');
});

test.afterEach(async ({ page }) => {
	// Cleanup independiente
	await page.close();
});
```

---

## � Excel Testing - Guía Completa

### Introducción

Excel Testing es esencial para validar descargas de reportes, modificar datos de prueba y verificar integraciones con sistemas que utilizan archivos Excel. ExcelJs permite automatizar estas operaciones.

### Instalación de Dependencias

```bash
npm install exceljs
```

### Casos de Uso Comunes

#### 1. **Download y Validación**

Descargar un archivo Excel y verificar su contenido:

```javascript
test('Download and validate Excel', async ({ page }) => {
	const downloadPromise = page.waitForEvent('download');
	await page.click('button[name="downloadExcel"]');

	const download = await downloadPromise;
	const filePath = 'tests/excel_utils/downloaded.xlsx';
	await download.saveAs(filePath);

	// Validar contenido
	const workbook = new ExcelJs.Workbook();
	await workbook.xlsx.readFile(filePath);
	const worksheet = workbook.getWorksheet('Sheet1');

	worksheet.eachRow((row) => {
		expect(row.values).toBeDefined();
	});
});
```

#### 2. **Lectura de Datos Específicos**

Buscar y extraer valores de una celda:

```javascript
async function getCellValue(filePath, searchValue) {
	const workbook = new ExcelJs.Workbook();
	await workbook.xlsx.readFile(filePath);
	const worksheet = workbook.getWorksheet('Sheet1');

	let result = null;
	worksheet.eachRow((row) => {
		row.eachCell((cell) => {
			if (cell.value === searchValue) {
				result = cell;
			}
		});
	});

	return result;
}

// Uso
const cell = await getCellValue('download.xlsx', 'ProductName');
console.log(`Found at row ${cell.row}, column ${cell.col}`);
```

#### 3. **Modificación de Datos**

Cambiar valores en el archivo antes de subir:

```javascript
async function updateCellValue(filePath, searchValue, newValue) {
	const workbook = new ExcelJs.Workbook();
	await workbook.xlsx.readFile(filePath);
	const worksheet = workbook.getWorksheet('Sheet1');

	worksheet.eachRow((row, rowNumber) => {
		row.eachCell((cell, colNumber) => {
			if (cell.value === searchValue) {
				const targetCell = worksheet.getCell(rowNumber, colNumber);
				targetCell.value = newValue;
			}
		});
	});

	await workbook.xlsx.writeFile(filePath);
}

// Uso
await updateCellValue('download.xlsx', 'OldPrice', 1000);
```

#### 4. **Flujo Completo: Download → Modify → Upload → Verify**

```javascript
test('Complete Excel workflow', async ({ page }) => {
	// 1. Download
	const downloadPromise = page.waitForEvent('download');
	await page.click('[data-test="download-btn"]');
	const download = await downloadPromise;
	const dlPath = 'tests/excel_utils/test_data.xlsx';
	await download.saveAs(dlPath);

	// 2. Modify
	await updateCellValue(dlPath, 'Mango', 500);

	// 3. Upload
	await page.locator('input[type="file"]').setInputFiles(dlPath);
	await page.click('[data-test="upload-btn"]');

	// 4. Verify
	const updatedRow = page.getByRole('row').filter({ hasText: 'Mango' });
	const price = await updatedRow.locator('[data-col="price"]').innerText();
	expect(parseInt(price)).toBe(500);
});
```

### Mejores Prácticas

✅ **Siempre use rutas relativas** para portabilidad entre máquinas  
✅ **Limpie archivos de descarga** en afterEach para evitar conflictos  
✅ **Valide estructura antes de modificar** archivos Excel  
✅ **Use funciones reutilizables** para lectura/escritura  
✅ **Capture errores de parseo** con try-catch

### Troubleshooting

| Problema                         | Solución                                            |
| -------------------------------- | --------------------------------------------------- |
| "XLSX file not found"            | Verificar ruta completa, usar path.resolve()        |
| "Cannot read property 'eachRow'" | Asegurar await workbook.xlsx.readFile() completó    |
| "Cell value undefined"           | Validar que la búsqueda sea exacta (case-sensitive) |
| "Permission denied"              | Cerrar archivo en Excel, crear nuevo proceso        |

---

## �📚 Recursos Útiles

| Recurso                          | Link                                    |
| -------------------------------- | --------------------------------------- |
| Documentación Oficial Playwright | https://playwright.dev                  |
| Playwright Inspector             | `npx playwright codegen`                |
| EventHub Test App                | https://eventhub.rahulshettyacademy.com |
| Cucumber.js Docs                 | https://cucumber.io/docs/cucumber       |
| Allure Framework                 | https://docs.qameta.io/allure           |
| TypeScript Handbook              | https://www.typescriptlang.org          |
| ExcelJs Documentation            | https://github.com/exceljs/exceljs      |

---

## 🎓 Ruta de Aprendizaje Recomendada

```
1. UI Basics (tests/ui/)
   ↓
2. Localizadores y E2E (tests/ui/05*)
   ↓
3. Page Object Model Básico (tests/pom/08)
   ↓
4. Data-Driven Testing (tests/pom/09)
   ↓
5. API Testing (tests/api/)
   ↓
6. Network Interception (tests/api/04-06)
   ↓
7. Excel Testing (tests/excel_utils/)
   ↓
8. BDD con Cucumber (tests/cucumber/)
   ↓
9. Tareas Prácticas (udemy-tasks/)
   ↓
10. TypeScript POM (tests/ts/pom-ts/)
   ↓
11. Reportes Profesionales (Allure)
```

---

## 🤝 Contribuciones y Mejoras

Este es un proyecto educativo. Siéntete libre de:

- ✅ Agregar nuevos tests
- ✅ Mejorar Page Objects
- ✅ Documentar patrones adicionales
- ✅ Reportar bugs o mejoras

---

## 📝 Licencia

Este proyecto es parte del curso de Udemy "Playwright - JavaScript / TypeScript from Scratch + Framework" y es para propósitos educativos.

---

## 📞 Soporte

Para preguntas y soporte:

- 📖 Revisa la documentación oficial de Playwright
- 🔍 Consulta los tests existentes para ejemplos
- 💬 Usa el Inspector de Playwright para explorar elementos
- ⚠️ Verifica errores en la consola del navegador

---

**¡Happy Testing! 🎭✅**

---

**Última actualización**: Mayo 2026  
**Versión de Playwright**: 1.60+  
**Versión de Node.js**: 18+
