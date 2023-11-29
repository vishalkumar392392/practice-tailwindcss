# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



const xl = require("exceljs");
const csvPath = "./Book1.xlsx";

const callFunction = async () => {
  const hyperlinks = [];
  const workbook = new xl.Workbook();

  await workbook.xlsx.readFile(csvPath);
  const worksheet = workbook.getWorksheet(1);
  worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
    if (rowNumber != 1) {
      hyperlinks.push(row.values[1].hyperlink);
    }
  });

  console.log(hyperlinks);
};

callFunction();
