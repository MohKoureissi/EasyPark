import { Component, OnInit ,Inject} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ServiceVoitureService } from 'app/service-voiture.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminParking } from 'app/model/adminParking';
import { AuthServiceService } from 'app/auth-service.service';

@Component({
  selector: 'app-voiture-formulaire',
  templateUrl: './voiture-formulaire.component.html',
  styleUrls: ['./voiture-formulaire.component.scss']
})
export class VoitureFormulaireComponent {

 
  voitureForm!:FormGroup;
  image!: File;
  image2!:File;
  image3!:File;
  adminParking: AdminParking | any;
 

  constructor(private fb:FormBuilder, private serviceVoiture: ServiceVoitureService ,private authService: AuthServiceService  ,public dialogRef: MatDialogRef<VoitureFormulaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){

      this.adminParking = JSON.parse(localStorage.getItem('idAdminParking')!);
      console.log("Admin Récuperer ", this.adminParking);

    this.voitureForm = this.fb.group({
      marque:['', Validators.required],
      modele:['', Validators.required],
      anneeSortie:['', Validators.required],
      photo2: ['', Validators.required],
      photo3:['', Validators.required],
      photo4:['', Validators.required],
      quantite:['', Validators.required],
      type:['', Validators.required],
      puissance:['', Validators.required],
      prix:['', Validators.required],
      adminParking: this.adminParking,
    })
  }
  ImageChange(event: any) {
    this.image = event.target.files[0];
    console.log(this.image);
  }
  ImageChange2(event: any) {
    this.image2 = event.target.files[0];
    console.log(this.image2);
  }
  ImageChange3(event: any) {
    this.image3 = event.target.files[0];
    console.log(this.image3);
  }


  onSubmit() {
    console.log("test1");
    if(this.voitureForm.valid &&  this.image && this.image2 && this.image3){
      console.log("test2");
      // if(this.data){
        // console.log("test3");

    const newVoiture = this.voitureForm.value;
    console.log(newVoiture);
    this.serviceVoiture.createVoiture(newVoiture,this.image,this.image2,this.image3).subscribe(
      (response) => {
        console.log('Voiture créée avec succès :', response);
        this.serviceVoiture.triggerupdate();
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
//Fermeture du modal
onNoClick(): void {
  this.dialogRef.close();
} 

}
