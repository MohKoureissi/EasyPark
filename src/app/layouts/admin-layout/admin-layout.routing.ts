import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../voiture/typography.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { LocationVoitureComponent } from 'app/location-voiture/location-voiture.component';
import { VenteComponent } from 'app/vente/vente.component';
import { MaintenanceComponent } from 'app/maintenance/maintenance.component';

export const AdminLayoutRoutes: Routes = [
   
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'vente',     component: VenteComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'notifications',  component: NotificationsComponent },
    {path: 'location-voiture', component: LocationVoitureComponent},
    {path: 'maintenance', component: MaintenanceComponent }
];
