import { Component, OnInit, ViewChild } from '@angular/core';
import { ExcelToJsonService } from '../../services/file-upload/excel-to-json.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { LoadingService } from '../../services/common/loading/loading.service';
import { TableCreationDialogComponent } from '../dialogs/table-creation-dialog/table-creation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-table',
  templateUrl: './upload-table.component.html',
  styleUrl: './upload-table.component.scss',
})
export class UploadTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private fileService: ExcelToJsonService,
    private loading:LoadingService,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
  }


  dataSourceAvailable:boolean=false;
  fileName!: any;
  file!: any;
  dataSource!: MatTableDataSource<any>;
  displayedColumns!: any[]
  tableName!:String

  onFileSelected(event: any) {
    this.fileName = event.target.files[0].name;
    this.file = event.target.files[0];
  }

  previewFile() {
    this.loading.show();
    this.fileService
      .convertExcelToJson(this.file)
      .then(({finalJson,columnNames}) => {
        this.displayedColumns=columnNames;
        this.dataSource= new MatTableDataSource<any>(finalJson);
        this.dataSource.paginator=this.paginator;
        this.dataSourceAvailable=true;
        this.loading.hide();
      });
  }

  reset(){
    this.dataSourceAvailable=false;
    this.dataSource=new MatTableDataSource<any>([])
    this.dataSource.paginator=this.paginator;
    this.fileName=null;
    this.file=null;
    this.displayedColumns=[];
  }

  createTable(){
    const dialogRef = this.dialog.open(TableCreationDialogComponent,{closeOnNavigation:true,disableClose:false})
    dialogRef.afterClosed().subscribe((data)=>{
      if(data)
      {
        this.tableName=data;
      }
    })
  }

}
