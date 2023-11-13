import { Routes } from '@angular/router';

import { NotificationsComponent } from '../../notifications/notifications.component';
import { LoginPageComponent } from 'app/login-page/login-page.component';

export const SuperAdminRoutes: Routes = [
   
 /*  { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'vente',     component: VenteComponent },
    { path: 'typography',     component: TypographyComponent },
    {path: 'location-voiture', component: LocationVoitureComponent},
    {path: 'maintenance', component: MaintenanceComponent },  */
    { path: 'notifications',  component: NotificationsComponent },
    {path: 'login-page', component: LoginPageComponent },
];
