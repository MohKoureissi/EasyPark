import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-vente-formulaire',
  templateUrl: './vente-formulaire.component.html',
  styleUrls: ['./vente-formulaire.component.scss']
})
export class VenteFormulaireComponent {
  constructor(public dialogRef: MatDialogRef<VenteFormulaireComponent>){}
  venteArr: any[]= [];
  vente:any={
    id:0,
    voiture:'',
    client:'',
    date:'',
  }
  ngOnInit(): void {
    const text : string| any=localStorage.getItem('vente');
    if(text != null){
      this.venteArr= JSON.parse(text);
    }
  }
  //Enregistrement
  saveVente(foms :NgForm){
    // debugger
    // this.projetArr.push(this.projet);
    this.vente.id = this.venteArr.length +1;
    this.venteArr.push(this.vente);
    // localStorage.setItem('projet',JSON.stringify(this.voitureArr));
    this.vente= {
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
  const locationtIdToUpdate = this.vente.id; // 'projet.id' devrait contenir l'identifiant de l'élément que vous éditez
  
  // Recherchez l'élément à mettre à jour en fonction de son identifiant
  const recordIndex = this.venteArr.findIndex(m => m.id === locationtIdToUpdate);

  if (recordIndex !== -1) {
    // Mettez à jour la propriété 'nom' de l'élément trouvé
    this.venteArr[recordIndex].nom = this.vente.nom;

    // Réinitialisez le modèle de formulaire après la mise à jour
    this.vente = {};

    // Enregistrez les modifications dans localStorage si nécessaire
    localStorage.setItem('location', JSON.stringify(this.venteArr));
  }
}
//Fermeture du modal
onNoClick(): void {
  this.dialogRef.close();
} 

}
