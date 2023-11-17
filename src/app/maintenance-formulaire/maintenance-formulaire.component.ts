import { Component,OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import { Voiture } from 'app/model/voiture';
import { ServiceVoitureService } from 'app/service-voiture.service';
import { MaintenanceService } from 'app/maintenance.service';
import { AdminParking } from 'app/model/adminParking';
import { AuthServiceService } from 'app/auth-service.service';

@Component({
  selector: 'app-maintenance-formulaire',
  templateUrl: './maintenance-formulaire.component.html',
  styleUrls: ['./maintenance-formulaire.component.scss'],
})
export class MaintenanceFormulaireComponent implements OnInit{
  
  maintenanceForm!: FormGroup;
  voitureSelect: Voiture |any;
  adminRecup: AdminParking | undefined;

  ngOnInit(): void {
    this.mainteService.getAllMaintenances().subscribe(res => {
     this.voitureSelect = res;
     console.log("voiture",this.voitureSelect);
    }) ;
    
  }

  constructor(private authService: AuthServiceService  ,public dialogRef:MatDialogRef<MaintenanceFormulaireComponent>,private mainteService: MaintenanceService ,
    private fb:FormBuilder,private voitureService: ServiceVoitureService,  @Inject(MAT_DIALOG_DATA) public data: any){
     
      this.adminRecup = this.authService.getAdminConnecte();        // Recuperer l'admin Connecter
      console.log("Admin recup dans la base ", this.adminRecup);

      this.maintenanceForm = this.fb.group({
        voiture: [this.data ? this.data.voiture.marque: '', Validators.required],
        date: [this.data ? this.data.date: '', Validators.required],
        prix: [this.data ? this.data.prix: '', Validators.required],
        desciption: [this.data ? this.data.desciption: '', Validators.required],
        adminParking: this.adminRecup,
      })
    }

    onSubmit() {
      console.log("test1");
      if(this.maintenanceForm.valid ){
        console.log("test2");
        // if(this.data){
          // console.log("test3");
  
      const newVente = this.maintenanceForm.value;
      console.log(newVente);
      this.mainteService.createMaintenance(newVente).subscribe(
        (response) => {
          console.log('Vente ajouter avec succès :', response);
          // Faites quelque chose avec la réponse ici
        },
        (error) => {
          console.error('Erreur lors du ajout de la vente :', error);
          // Gérer l'erreur ici
        }
      );
    }
   
  }
  
 
  


//Fermeture du modal
onNoClick(): void {
  this.dialogRef.close();
} 

}
