import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../voiture/typography.component';
import { LocationVoitureComponent } from 'app/location-voiture/location-voiture.component';
import { VenteComponent } from 'app/vente/vente.component';
import { MaintenanceComponent } from 'app/maintenance/maintenance.component';
import { LoginPageComponent } from 'app/login-page/login-page.component';
import { AuthGardeService } from 'app/auth-garde.service';
import { Component } from '@angular/core';
import { InscriptionComponent } from 'app/inscription/inscription.component';
import { LoginSuperAdminComponent } from 'app/login-super-admin/login-super-admin.component';

export const AdminLayoutRoutes: Routes = [
   
    // canActivate, [AuthGardeService], 
    { path: 'login-page',     component: LoginPageComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'inscription',   component: InscriptionComponent},
    { path: 'login-super-admin',   component: LoginSuperAdminComponent},
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'vente',     component: VenteComponent },
    { path: 'typography',     component: TypographyComponent },
    {path: 'location-voiture', component: LocationVoitureComponent},
    {path: 'maintenance', component: MaintenanceComponent },
];
