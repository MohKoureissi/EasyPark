import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientModel } from 'app/model/clientModel';
import { Voiture } from 'app/model/voiture';
import { ServiceClientService } from 'app/service-client.service';
import { ServiceVoitureService } from 'app/service-voiture.service';
import { VenteServiceService } from 'app/vente-service.service';

@Component({
  selector: 'app-vente-formulaire',
  templateUrl: './vente-formulaire.component.html',
  styleUrls: ['./vente-formulaire.component.scss']
})
export class VenteFormulaireComponent implements OnInit {

  venteForm!: FormGroup;
  voitureSelect: Voiture |any;
  clientSelect: ClientModel |any;
  
  ngOnInit(): void {
    this.voitureService.getAllVoitures.apply(res => {
     this.voitureSelect = res;
     console.log("voiture",this.voitureSelect);
    }) 
    this.clientService.getAllClients.apply(res => {
      this.clientSelect = res;
      console.log("client", this.clientSelect);
    })
  }
  constructor(private achatService: VenteServiceService  ,private fb:FormBuilder,private voitureService: ServiceVoitureService,private clientService: ServiceClientService,public dialogRef: MatDialogRef<VenteFormulaireComponent>,  @Inject(MAT_DIALOG_DATA) public data: any){
    this.venteForm= this.fb.group({
      idVoiture: [this.data ? this.data.idVoiture.marque: '', Validators.required],
      idClient: [this.data ? this.data.idClient.nom:'', Validators.required],
      date: [this.data ? this.data.date: '', Validators.required]
    })
  }

  onSubmit() {
    console.log("test1");
    if(this.venteForm.valid ){
      console.log("test2");
      // if(this.data){
        // console.log("test3");

    const newVente = this.venteForm.value;
    console.log(newVente);
    this.achatService.createAchat(newVente).subscribe(
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

  venteArr: any[]= [];
  vente:any={
    id:0,
    voiture:'',
    client:'',
    date:'',
  }
  //Enregistrement
 
// Modification

//Fermeture du modal
onNoClick(): void {
  this.dialogRef.close();
} 

}
