import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class ExcelToJsonService {
  constructor() {}

  convertExcelToJson(file: File): Promise<{ finalJson: any[], columnNames:  any  }> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        let columnNames: any = [];

        const sheetName = workbook.SheetNames[0]; // Assuming only one sheet
        const worksheet = workbook.Sheets[sheetName];
        const jsonData:any = XLSX.utils.sheet_to_json(worksheet);
        columnNames = Object.keys(jsonData[0]);

        const finalJson:any = jsonData.map((row:any) => {
          const obj:any = {};
          columnNames.forEach((header: string | number) => {
              obj[header] = row[header];
          });
          return obj;
      });

        resolve({finalJson,columnNames});
      };
      reader.onerror = error => reject(error);
      reader.readAsBinaryString(file);
    });
  }

}
