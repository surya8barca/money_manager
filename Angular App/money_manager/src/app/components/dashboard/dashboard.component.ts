import { Component, OnInit } from '@angular/core';
import { InitialSetupService } from '../../services/initialSetup/initial-setup.service';
import { LoadingService } from '../../services/common/loading/loading.service';

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
  erromsg:string="";

  checkForTable(){
    this.loading.show();
    this.initialSetupService.getTablesRecords().subscribe(
      {
        next:(data)=>{
          this.loading.hide();
          console.log(data);
          if(data.length !== 0)
          {
            this.tablesAvailable=true;
          }
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
