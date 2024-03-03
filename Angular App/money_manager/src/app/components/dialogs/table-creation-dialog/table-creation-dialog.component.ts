import { Component } from '@angular/core';
import { UploadTableComponent } from '../../upload-table/upload-table.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ToasterService } from '../../../services/common/toaster/toaster.service';

@Component({
  selector: 'app-table-creation-dialog',
  templateUrl: './table-creation-dialog.component.html',
  styleUrl: './table-creation-dialog.component.scss'
})
export class TableCreationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UploadTableComponent>,
    private toasterService:ToasterService
    ){}

  tableName!:string;

  submit()
  {
    if(this.tableName)
    {
      this.dialogRef.close(this.tableName);
    }
    else
    {
      this.toasterService.open("Table Name is Mandatory!!");
    }
  }

  close(){
    this.dialogRef.close();
  }

}
