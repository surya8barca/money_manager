import { Component, ViewChild } from '@angular/core';
import { ExcelToJsonService } from '../../services/file-upload/excel-to-json.service';

@Component({
  selector: 'app-upload-table',
  templateUrl: './upload-table.component.html',
  styleUrl: './upload-table.component.scss',
})
export class UploadTableComponent {
  constructor(private fileService: ExcelToJsonService) {}

  fileName!: string;
  file!: File;

  onFileSelected(event: any) {
    console.log(event);
    this.fileName = event.target.files[0].name;
    this.file = event.target.files[0];
  }

  previewFile() {
    this.fileService
      .convertExcelToJson(this.file)
      .then(({ jsonData, columnNames }) => {
        console.log('json:', jsonData);
        console.log('columns:', columnNames);
      });
  }
}
