import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FormsModule, NgForm} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-location-formulaire',
  templateUrl: './location-formulaire.component.html',
  styleUrls: ['./location-formulaire.component.scss']
})
export class LocationFormulaireComponent {
  constructor(public dialogRef:MatDialogRef<LocationFormulaireComponent>){}
  locationArr: any[]= [];
  location: any={
    id:0,
    voiture:'',
    client:'',
    date:'',
    duree:'',
  }
  ngOnInit(): void {
    const text : string| any=localStorage.getItem('location');
    if(text != null){
      this.locationArr= JSON.parse(text);
    }
  }
  //Enregistrement
  saveLocation(foms :NgForm){
    // debugger
    // this.projetArr.push(this.projet);
    this.location.id = this.locationArr.length +1;
    this.locationArr.push(this.location);
    // localStorage.setItem('projet',JSON.stringify(this.voitureArr));
    this.location= {
      id : 0,
      voiture:'',
    client:'',
    date:'',
    duree:'',
    }
}
// Modification
update() {
  // Supposons que vous avez un identifiant unique pour chaque élément, appelé 'id'
  const locationtIdToUpdate = this.location.id; // 'projet.id' devrait contenir l'identifiant de l'élément que vous éditez
  
  // Recherchez l'élément à mettre à jour en fonction de son identifiant
  const recordIndex = this.locationArr.findIndex(m => m.id === locationtIdToUpdate);

  if (recordIndex !== -1) {
    // Mettez à jour la propriété 'nom' de l'élément trouvé
    this.locationArr[recordIndex].nom = this.location.nom;

    // Réinitialisez le modèle de formulaire après la mise à jour
    this.location = {};

    // Enregistrez les modifications dans localStorage si nécessaire
    localStorage.setItem('location', JSON.stringify(this.locationArr));
  }
}
//Fermeture du modal
onNoClick(): void {
  this.dialogRef.close();
} 
}
