import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
interface Voiture {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-maintenance-formulaire',
  templateUrl: './maintenance-formulaire.component.html',
  styleUrls: ['./maintenance-formulaire.component.scss'],
  // imports: [MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule],
})
export class MaintenanceFormulaireComponent {

  voitures: Voiture[] = [
   {value: 0, viewValue: 'Mercedes'},
  {value: 1, viewValue: 'Toyota'},
  {value: 2, viewValue: 'Nissan'},
  ];


  constructor(public dialogRef:MatDialogRef<MaintenanceFormulaireComponent>){}
  maintenanceArr: any[]=[];
  maintenance:any={
    id: 0,
    voiture:'',
    prix:'',
    date:'',
    description:''
  }
  ngOnInit(): void {
    const text : string| any=localStorage.getItem('maintenance');
    if(text != null){
      this.maintenanceArr= JSON.parse(text);
    }
  }
  //Enregistrement
  saveMaintenance(foms :NgForm){
    // debugger
    // this.projetArr.push(this.projet);
    this.maintenance.id = this.maintenanceArr.length +1;
    this.maintenanceArr.push(this.maintenance);
    // localStorage.setItem('projet',JSON.stringify(this.voitureArr));
    this.maintenance= {
      id: 0,
    voiture:'',
    prix:'',
    date:'',
    description:'',
    }
}
// Modification
update() {
  // Supposons que vous avez un identifiant unique pour chaque élément, appelé 'id'
  const locationtIdToUpdate = this.maintenance.id; // 'projet.id' devrait contenir l'identifiant de l'élément que vous éditez
  
  // Recherchez l'élément à mettre à jour en fonction de son identifiant
  const recordIndex = this.maintenanceArr.findIndex(m => m.id === locationtIdToUpdate);

  if (recordIndex !== -1) {
    // Mettez à jour la propriété 'nom' de l'élément trouvé
    this.maintenanceArr[recordIndex].nom = this.maintenance.nom;

    // Réinitialisez le modèle de formulaire après la mise à jour
    this.maintenance = {};

    // Enregistrez les modifications dans localStorage si nécessaire
    localStorage.setItem('location', JSON.stringify(this.maintenanceArr));
  }
}
//Fermeture du modal
onNoClick(): void {
  this.dialogRef.close();
} 


}
