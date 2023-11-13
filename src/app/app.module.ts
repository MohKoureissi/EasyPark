import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatTableModule} from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { VenteComponent } from './vente/vente.component';
import { VenteFormulaireComponent } from './vente-formulaire/vente-formulaire.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MaintenanceFormulaireComponent } from './maintenance-formulaire/maintenance-formulaire.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SuperAdminComponent } from './super-layout/super-admin/super-admin.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatPaginatorModule,
    AppRoutingModule, 
    MatTableModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SuperAdminComponent
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
