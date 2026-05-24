const ExcelJs = require('exceljs');

// ? Handling Promise
// const workbook = new ExcelJs.Workbook();
// workbook.xlsx.readFile('tests/excel_utils/excel-download.xlsx').then(function () {
// 	const worksheet = workbook.getWorksheet('Sheet1');

// 	// Traversing rows and cells
// 	worksheet.eachRow((row, rowNumber) => {
// 		console.log('row', row.values, rowNumber);

// 		row.eachCell((cell, colNumber) => {
// 			console.log('cell', cell.value, colNumber);
// 		});
// 	});
// });

// ? Async await
async function excelTest() {
	const workbook = new ExcelJs.Workbook();

	//? Read excel
	await workbook.xlsx.readFile('tests/excel_utils/excel-download.xlsx');
	const worksheet = workbook.getWorksheet('Sheet1');

	// Traversing rows and cells
	let output = {
		row: 0,
		column: 0,
	};
	worksheet.eachRow((row, rowNumber) => {
		// console.log('row', row.values, rowNumber);

		row.eachCell((cell, colNumber) => {
			// console.log('cell', cell.value, colNumber);
			if (cell.value === 'Kivi') {
				console.log('row', rowNumber);
				output.row = rowNumber;
				console.log('col', colNumber);
				output.column = colNumber;
			}
		});
	});

	//? Write in Excel
	// const cell = worksheet.getCell(3, 2);
	const cell = worksheet.getCell(output.row, output.column);
	console.log(cell.value);
	cell.value = `Banana ${Date.now()}`;
	console.log(cell.value);
	await workbook.xlsx.writeFile('tests/excel_utils/excel-download.xlsx');
}

excelTest();
