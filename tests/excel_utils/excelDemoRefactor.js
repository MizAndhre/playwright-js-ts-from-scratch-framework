const ExcelJs = require('exceljs');

const excelFile = 'tests/excel_utils/excel-download.xlsx';

async function writeExcel(searchText, replaceText, filePath) {
	const workbook = new ExcelJs.Workbook();

	await workbook.xlsx.readFile(filePath);
	const worksheet = workbook.getWorksheet('Sheet1');

	//? Read excel
	const output = await readExcel(worksheet, searchText);

	//? Write in Excel
	// const cell = worksheet.getCell(3, 2);
	const cell = worksheet.getCell(output.row, output.column);
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

writeExcel('Green', `Black ${Date.now()}`, 'C:/Users/andry/Downloads/download.xlsx');
// "C:\Users\andry\Downloads\download.xlsx"
