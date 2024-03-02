import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InitialSetupService {

  constructor(
    private http:HttpClient
  ) { }

  getTablesRecords():Observable<any>{
    return this.http.get(environment.basicEndpoint+'checkForTables');
  }
}
