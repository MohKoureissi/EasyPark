import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, NgForm} from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ServiceVoitureService } from 'app/service-voiture.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-voiture-formulaire',
  templateUrl: './voiture-formulaire.component.html',
  styleUrls: ['./voiture-formulaire.component.scss']
})
export class VoitureFormulaireComponent implements OnInit {

  photos2!:File;
  photos3!:File;
  photos4!:File;
  voitureForm!:FormGroup;

  constructor(private fb:FormBuilder, private serviceVoiture: ServiceVoitureService   ,public dialogRef: MatDialogRef<VoitureFormulaireComponent>){
    this.voiture.form = this.fb.group({
      marque:['', Validators.required],
      modele:['', Validators.required],
      anneeSortie:['', Validators.required],
      photo2:['', Validators.required],
      photo3:['', Validators.required],
      photo4:['', Validators.required],
      quantite:['', Validators.required],
      type:['', Validators.required],
      prix:['', Validators.required],
    })
  }
  voitureArr: any[]= [];
  voiture: any={
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

  photos2Change(event:any){
  this.photos2 = event.target.file[0];
  console.log("Chemin 1", this.photos2)
  }
  photos3Change(event:any){
  this.photos3 = event.target.file[0];
  console.log("Chemin 2", this.photos3)
  }
  photos4Change(event:any){
  this.photos4 = event.target.file[0];
  console.log("Chemin 3", this.photos4)
  }

  createVoiture() {
    if(this.voitureForm.valid){

    const newVoiture = this.voitureForm.value;
    console.log(newVoiture);
    this.serviceVoiture.createVoiture(newVoiture,this.photos2,this.photos3,this.photos4).subscribe(
      (response) => {
        console.log('Voiture créée avec succès :', response);
        // Faites quelque chose avec la réponse ici
      },
      (error) => {
        console.error('Erreur lors de la création de la voiture :', error);
        // Gérer l'erreur ici
      }
    );
  }
}
// //Modification
// update() {
//   // Supposons que vous avez un identifiant unique pour chaque élément, appelé 'id'
//   const projectIdToUpdate = this.voiture.id; // 'projet.id' devrait contenir l'identifiant de l'élément que vous éditez
  
//   // Recherchez l'élément à mettre à jour en fonction de son identifiant
//   const recordIndex = this.voitureArr.findIndex(m => m.id === projectIdToUpdate);

//   if (recordIndex !== -1) {
//     // Mettez à jour la propriété 'nom' de l'élément trouvé
//     this.voitureArr[recordIndex].nom = this.voiture.marque;

//     // Réinitialisez le modèle de formulaire après la mise à jour
//     this.voiture = {};

//     // Enregistrez les modifications dans localStorage si nécessaire
//     localStorage.setItem('projet', JSON.stringify(this.voitureArr));
//   }
// }
//Fermeture du modal
onNoClick(): void {
  this.dialogRef.close();
} 

}
