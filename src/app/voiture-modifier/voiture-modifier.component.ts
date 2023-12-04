import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminParkingServiceService } from 'app/admin-parking-service.service';
import { AdminParking } from 'app/model/adminParking';
import { ServiceVoitureService } from 'app/service-voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-voiture-modifier',
  templateUrl: './voiture-modifier.component.html',
  styleUrls: ['./voiture-modifier.component.scss']
})
export class VoitureModifierComponent {

  adminParking : AdminParking |any;
  voitureForm :FormGroup;
  image!: File;
  image2!:File;
  image3!:File;

  ImageChange(event:any){
    this.image = event.target.files[0];
    console.log(this.image);
  }
  ImageChange2(event:any){
    this.image2 = event.target.files[0];
    console.log(this.image2);
  }
  ImageChange3(event:any){
    this.image3 = event.target.files[0];
    console.log(this.image3);
  }
  constructor(private fb : FormBuilder, private voitureService: ServiceVoitureService, 
    private adminService: AdminParkingServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<VoitureModifierComponent>
    ) { 
      this.adminParking = JSON.parse(localStorage.getItem('AdminParking')!);
      console.log("Admin Récuperer ", this.adminParking);

    this.voitureForm = this.fb.group({
      marque:[this.data.voiture ? this.data.voiture.marque:'', Validators.required],
      modele:[this.data.voiture ? this.data.voiture.modele:'', Validators.required],
      anneeSortie:[this.data.voiture ? this.data.voiture.anneeSortie:'', Validators.required],
      photo2: [this.data.voiture ? this.data.voiture.photo2:'', Validators.required],
      photo3:[this.data.voiture ? this.data.voiture.photo3:'', Validators.required],
      photo4:[this.data.voiture ? this.data.voiture.photo4:'', Validators.required],
      quantite:[this.data.voiture ? this.data.voiture.quantite:'', Validators.required],
      type:[this.data.voiture ? this.data.voiture.type:'', Validators.required],
      puissance:[this.data.voiture ? this.data.voiture.puissance:'', Validators.required],
      prix:[this.data.voiture ? this.data.voiture.prix:'', Validators.required],
      // adminParking: this.adminParking,
      // admin: [this.data.banque ? this.data.banque.admin : '', Validators.required]
    });
  }
  onSubmit() {
    // Obtenez l'ID à partir des données du dialogue
    const idVoiture = this.data.voiture?.idVoiture;
    console.log("hh");
    if (this.voitureForm.valid &&  this.image && this.image2 && this.image3, idVoiture) {
      const newVoiture = this.voitureForm.value;
    console.log("aa");
      this.voitureService.updateVoiture(idVoiture, newVoiture, this.image, this.image2, this.image3).subscribe(
        (response) => {
          console.log('Voiture modifiée avec succès :', response);
          this.voitureForm.reset();
          Swal.fire('Succès !...', 'Voiture modifiée avec succès', 'success');
          // Fermez le dialogue ou effectuez d'autres actions nécessaires
          this.dialogRef.close(response);
        },
        (error) => {
          console.error("Erreur lors de la modification de la voiture :", error);
          // Gérer l'erreur ici si nécessaire
        }
      );
    }
}
onNoClick(): void {
  this.dialogRef.close();
}
}
