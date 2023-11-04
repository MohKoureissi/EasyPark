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
import { VoitureFormulaireComponent } from './voiture-formulaire/voiture-formulaire.component';

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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
