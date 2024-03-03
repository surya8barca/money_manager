import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoadingComponent } from './common/loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { CreateTableFormComponent } from './components/create-table-form/create-table-form.component'
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UploadTableComponent } from './components/upload-table/upload-table.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { TableCreationDialogComponent } from './components/dialogs/table-creation-dialog/table-creation-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    FooterComponent,
    BannerComponent,
    DashboardComponent,
    LoadingComponent,
    CreateTableFormComponent,
    UploadTableComponent,
    TableCreationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
