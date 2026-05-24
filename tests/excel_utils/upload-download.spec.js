import { test, expect } from '@playwright/test';
const ExcelJs = require('exceljs');

const excelFile = 'tests/excel_utils/excel-download.xlsx';

async function writeExcel(searchText, replaceText, change, filePath) {
	const workbook = new ExcelJs.Workbook();

	await workbook.xlsx.readFile(filePath);
	const worksheet = workbook.getWorksheet('Sheet1');

	//? Read excel
	const output = await readExcel(worksheet, searchText);

	//? Write in Excel
	// const cell = worksheet.getCell(3, 2);
	const cell = worksheet.getCell(output.row, output.column + change.colChange);
	console.log(cell.value);
	cell.value = replaceText;
	console.log(cell.value);
	await workbook.xlsx.writeFile(filePath);
}

async function readExcel(worksheet, searchText) {
	let output = { row: 0, column: 0 };
	// Traversing rows and cells
	worksheet.eachRow((row, rowNumber) => {
		// console.log('row', row.values, rowNumber);

		row.eachCell((cell, colNumber) => {
			// console.log('cell', cell.value, colNumber);
			if (cell.value === searchText) {
				console.log('row', rowNumber);
				output.row = rowNumber;
				console.log('col', colNumber);
				output.column = colNumber;
			}
		});
	});

	return output;
}

test('should upload download excel validation', async ({ page }) => {
	const downloadsPath = 'tests/excel_utils/';
	const textSearch = 'Mango';
	const priceChange = 500;

	await page.goto('https://rahulshettyacademy.com/upload-download-test/');
	const downloadPromise = page.waitForEvent('download');
	await page.getByRole('button', { name: 'Download' }).click();

	const download = await downloadPromise;
	await download.saveAs(`${downloadsPath}download.xlsx`);

	await writeExcel(
		textSearch,
		priceChange,
		{ rowChange: 0, colChange: 2 },
		`${downloadsPath}download.xlsx`,
	);

	await page.locator('#fileinput').click();
	// upload a file to the web and element is input type=file
	await page.locator('#fileinput').setInputFiles(`${downloadsPath}download.xlsx`);

	const textLocator = page.getByText(textSearch);
	const getRow = await page.getByRole('row').filter({ hasText: textSearch });
	const getRowPrice = await getRow.locator('#cell-4-undefined').innerText();
	console.log(getRowPrice);

	expect(parseInt(getRowPrice)).toBe(priceChange);
	// await page.pause();
});
