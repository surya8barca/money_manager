import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class ExcelToJsonService {
  constructor() {}

  convertExcelToJson(file: File): Promise<{ jsonData: any[], columnNames:  any  }> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const jsonData: any[] = [];
        let columnNames: any = [];

        workbook.SheetNames.forEach(sheetName => {
          const sheet = workbook.Sheets[sheetName];
          const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

          if (sheetData.length > 0) {

            columnNames = sheetData[0];

            sheetData.splice(0, 1);

            jsonData.push(...sheetData);
          }
        });

        resolve({ jsonData, columnNames });
      };
      reader.onerror = error => reject(error);
      reader.readAsBinaryString(file);
    });
  }
}
