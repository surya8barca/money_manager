import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateTableFormComponent } from './components/create-table-form/create-table-form.component';
import { routeConstants } from './properties/properties';

const routes: Routes = [

  { path:routeConstants.HOME_ROUTE, component:DashboardComponent },
  { path:routeConstants.NEW_TABLE_ROUTE, component:CreateTableFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
