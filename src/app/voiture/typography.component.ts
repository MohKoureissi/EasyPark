import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Voiture } from 'app/model/voiture';
import { ServiceVoitureService } from 'app/service-voiture.service';
import { VoitureFormulaireComponent } from 'app/voiture-formulaire/voiture-formulaire.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css'],
  // imports: [MatButtonModule, MatDialogModule],
})
export class TypographyComponent  {
  displayedColumns: string[] = ['photo2', 'marque', 'modele','quantite'];
  // dataSource = new MatTableDataSource<Voiture>();
  voitures: Voiture[] = [];
 
  constructor(private voitureService: ServiceVoitureService ,private dialogRef: MatDialog) {
    this.chargerVoiture();
  }

  ngOnInit(): void {
    this.voitureService.update$.subscribe(voiture => {
      this.chargerVoiture();
    });
  }


  chargerVoiture(): void {
    this.voitureService.getAllVoitures().subscribe(voiture => {
      this.voitures = voiture;
    });
  }
  openDialog(){
    const dialog = this.dialogRef.open(VoitureFormulaireComponent, {
      width:'520px',
     
    })
  }

  delete(idVoiture:number){
    Swal.fire({
      title: 'Etes vous sûr ?',
      text: "Voulez - vous supprimer!!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText:'Annuler',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, je veux supprimer!',
    }).then((result) => {
      if (result.value) {
        this.voitureService.deleteVoiture(idVoiture).subscribe(
      (result) => {
        console.log(result);
        this.voitureService.triggerupdate();
      }
          );
          console.log("idVoiture ", idVoiture);
          this.voitureService.triggerupdate();
        this.chargerVoiture();
        Swal.fire(
          'Supprimer!',
          'Suppression avec succès.',
          'success'
          )
        }
      else{
        Swal.fire(
          'Suppression annulée!',
          'Cette suppresion a été annulée.',
          'error'
        )
      }
    });
    // this.chargerData();

  }

  }




