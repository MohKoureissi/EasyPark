import { Injectable } from '@angular/core';
import { AdminParking } from './model/adminParking';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private admin1: AdminParking | undefined;

  constructor() {
    // Charger les données de l'administrateur depuis le localStorage au moment de l'initialisation du service
    const storedAdminId = localStorage.getItem('idAdmin');
    if (storedAdminId) {
      // Si un ID est stocké, vous pouvez charger les données de l'administrateur ici
      // this.admin1 = this.loadAdminData(storedAdminId);
    }
  }

  setAdminConnecte(admin: AdminParking) {
    this.admin1 = admin;
    console.log("setAdminConnecte", this.admin1);

    // Stocker l'id de l'administrateur connecté dans le localStorage
    localStorage.setItem('idAdmin', this.admin1.idAdminParking.toString());
  }

  getAdminConnecte(): AdminParking | undefined {
    return this.admin1;
  }
}
