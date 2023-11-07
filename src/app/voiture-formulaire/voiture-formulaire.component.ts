import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, NgForm} from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-voiture-formulaire',
  templateUrl: './voiture-formulaire.component.html',
  styleUrls: ['./voiture-formulaire.component.scss']
})
export class VoitureFormulaireComponent {
  constructor(public dialogRef: MatDialogRef<VoitureFormulaireComponent>){}
  voitureArr: any[]= [];
  voiture: any={
    id: 0,
    marque:'',
    modele:'',
    anneeSortie:'',
    photo1:'',
    photo2:'',
    photo3:'',
    photo4:'',
    transmission:'',
    quantite:'',
    type:'',
    prix:''
  }
  ngOnInit(): void {
    const text : string| any=localStorage.getItem('voiture');
    if(text != null){
      this.voitureArr= JSON.parse(text);
    }
  }
  saveVoiture(foms :NgForm){
    // debugger
    // this.projetArr.push(this.projet);
    this.voiture.id = this.voitureArr.length +1;
    this.voitureArr.push(this.voiture);
    // localStorage.setItem('projet',JSON.stringify(this.voitureArr));
    this.voiture= {
      id : 0,
      marque:'',
    modele:'',
    anneeSortie:'',
    photo1:'',
    photo2:'',
    photo3:'',
    photo4:'',
    transmission:'',
    quantite:'',
    type:'',
    prix:''
  }
}
//Modification
update() {
  // Supposons que vous avez un identifiant unique pour chaque élément, appelé 'id'
  const projectIdToUpdate = this.voiture.id; // 'projet.id' devrait contenir l'identifiant de l'élément que vous éditez
  
  // Recherchez l'élément à mettre à jour en fonction de son identifiant
  const recordIndex = this.voitureArr.findIndex(m => m.id === projectIdToUpdate);

  if (recordIndex !== -1) {
    // Mettez à jour la propriété 'nom' de l'élément trouvé
    this.voitureArr[recordIndex].nom = this.voiture.marque;

    // Réinitialisez le modèle de formulaire après la mise à jour
    this.voiture = {};

    // Enregistrez les modifications dans localStorage si nécessaire
    localStorage.setItem('projet', JSON.stringify(this.voitureArr));
  }
}
//Fermeture du modal
onNoClick(): void {
  this.dialogRef.close();
} 

}
