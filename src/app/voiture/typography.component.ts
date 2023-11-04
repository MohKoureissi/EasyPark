import { Component, OnInit } from '@angular/core';
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
 
   
  ngOnInit() {
  }
  };




