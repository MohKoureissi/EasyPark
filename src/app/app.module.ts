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
import { DashboardSuperAdminComponent } from './dashboard-super-admin/dashboard-super-admin.component';
import { ParkingActifComponent } from './parking-actif/parking-actif.component';
import { ParkingInactifComponent } from './parking-inactif/parking-inactif.component';
import { ActifFormulaireComponent } from './actif-formulaire/actif-formulaire.component';
import { SuspendreFormulaireComponent } from './suspendre-formulaire/suspendre-formulaire.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocationService } from './location.service';
import { InscriptionComponent } from './inscription/inscription.component';


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
    MatDialogModule,
    ReactiveFormsModule
  ],
  declarations: [
    
    AppComponent,
    AdminLayoutComponent,
    SuperAdminComponent,
    ActifFormulaireComponent,
    SuspendreFormulaireComponent,
   
    
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
