import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/typography', title: 'Voitures',  icon:'directions_car', class: '' },
    { path: '/vente', title: 'Ventes',  icon:'shopping_cart', class: '' },
    {path: '/location-voiture', title: 'Locations',icon:'car_rental', class:''},
    { path: '/user-profile', title: 'Profile',  icon:'person', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/maintenance', title: 'Maintenances',  icon:'construction', class: '' },
]
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  //  isLoginPage: boolean = false;
   isBlankPage : boolean = false;
   isLoginPage : boolean = false;

  constructor(private router: Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
         this.isBlankPage = event.url === '/';
         this.isLoginPage = event.url.endsWith('login-page') || event.url === '/login';
      }
    });
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
