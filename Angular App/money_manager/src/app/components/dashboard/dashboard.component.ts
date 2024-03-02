import { Component, OnInit } from '@angular/core';
import { InitialSetupService } from '../../services/initialSetup/initial-setup.service';
import { LoadingService } from '../../services/common/loading/loading.service';
import { routeConstants,messageConstants } from '../../properties/properties';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(
    private initialSetupService:InitialSetupService,
    private loading:LoadingService
  ){

  }

  ngOnInit(): void {
    this.checkForTable();
  }

  tablesAvailable:boolean=false;
  availableTables!:any[];
  erromsg:string="";
  noTablesError:string=messageConstants.NO_TABLES_FOUND;
  createTableRoute:any = routeConstants.NEW_TABLE_ROUTE;

  checkForTable(){
    this.loading.show();
    this.initialSetupService.getTablesRecords().subscribe(
      {
        next:(data)=>{
          this.loading.hide();
          this.tablesAvailable=true;
          this.availableTables=data;
        },
        error:(error)=>{
          this.loading.hide();
          this.tablesAvailable=false;
          this.erromsg=error.error.error;
        }
      }
    )
  }

}
