import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo2 {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo2[] = [
  
  { path: 'dashboard-super-admin', title: 'Dashboard',  icon:'dashboard', class: '' },
  { path: 'parking-actif', title: 'Parking Actifs',  icon:'directions_car', class: '' },
  { path: 'parking-inactif', title: 'Parking Inactifs',  icon:'directions_car', class: '' },
  { path: 'utilisateurs', title: 'Utilisateurs',  icon:'person', class: '' },
  
  // { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
]
@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.scss']
})
export class Sidebar2Component implements OnInit {
  menuItems: any[];

  // constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  //  isLoginPage: boolean = false;
  isBlankPage : boolean = false;

  constructor(private router: Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isBlankPage = event.url === '/';
        //  this.isLoginPage = event.url.endsWith('login-page') || event.url === '/login';
      }
    });
  }

}
