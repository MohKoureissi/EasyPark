import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Voiture } from 'app/model/voiture';
import { ServiceVoitureService } from 'app/service-voiture.service';
import { VoitureFormulaireComponent } from 'app/voiture-formulaire/voiture-formulaire.component';

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
 
    // @ViewChild(MatPaginator) paginator!: MatPaginator;
    // @ViewChild(MatSort ) sort!: MatSort;
  constructor(private voitureService: ServiceVoitureService ,private dialogRef: MatDialog) {
    
   
    // this.dataSource = new MatTableDataSource(this.achats);
  }

  ngOnInit(): void {
    this.voitureService.getAllVoitures().subscribe(voiture => {
      this.voitures = voiture;
      // this.dataSource = new MatTableDataSource(this.achats);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    });

  }
  openDialog(){
    const dialog = this.dialogRef.open(VoitureFormulaireComponent, {
      width:'520px',
     
    })
  }

  }




