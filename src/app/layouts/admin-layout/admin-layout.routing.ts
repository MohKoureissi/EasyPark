import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../voiture/typography.component';
import { LocationVoitureComponent } from 'app/location-voiture/location-voiture.component';
import { VenteComponent } from 'app/vente/vente.component';
import { MaintenanceComponent } from 'app/maintenance/maintenance.component';
import { LoginPageComponent } from 'app/login-page/login-page.component';

export const AdminLayoutRoutes: Routes = [
   
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'vente',     component: VenteComponent },
    { path: 'typography',     component: TypographyComponent },
    {path: 'location-voiture', component: LocationVoitureComponent},
    {path: 'maintenance', component: MaintenanceComponent },
];
