import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { VoitureFormulaireComponent } from 'app/voiture-formulaire/voiture-formulaire.component';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css'],
  // imports: [MatButtonModule, MatDialogModule],
})
export class TypographyComponent  {

  constructor(private matDialog: MatDialog) {}
    openDialog() {
      this.matDialog.open(VoitureFormulaireComponent, {
        width: '500px',
      })
   }
   voitureArr: any[]= [];
   voiture: any={
     id: 0,
     nom:'',
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
    // localStorage.setItem('voiture',JSON.stringify(this.voitureArr));
    this.voiture= {
      id : 0,
      nom:'',
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
 
  
  };




