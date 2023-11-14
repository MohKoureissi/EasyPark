import { Routes } from '@angular/router';

import { NotificationsComponent } from '../../notifications/notifications.component';
import { LoginPageComponent } from 'app/login-page/login-page.component';
import { ParkingInactifComponent } from 'app/parking-inactif/parking-inactif.component';
import { ParkingActifComponent } from 'app/parking-actif/parking-actif.component';
import { DashboardSuperAdminComponent } from 'app/dashboard-super-admin/dashboard-super-admin.component';
import { UtilisateursComponent } from 'app/utilisateurs/utilisateurs.component';

export const SuperAdminRoutes: Routes = [
   
    { path: 'notifications',  component: NotificationsComponent },
    {path: 'parking-actif', component: ParkingActifComponent},
    {path: 'parking-inactif', component: ParkingInactifComponent},
    {path: 'dashboard-super-admin', component: DashboardSuperAdminComponent},
    {path: 'utilisateurs', component: UtilisateursComponent}
];
