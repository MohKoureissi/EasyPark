import * as Chartist from 'chartist';
import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { LocationFormulaireComponent } from 'app/location-formulaire/location-formulaire.component';

@Component({
  selector: 'app-location-voiture',
  templateUrl: './location-voiture.component.html',
  styleUrls: ['./location-voiture.component.scss'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule],
})
export class LocationVoitureComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'voiture', 'client', 'date', 'duree'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {  
    this.dataSource.paginator = this.paginator;
  }
  constructor(private matDialog: MatDialog) {}
    openDialog() {
      this.matDialog.open(LocationFormulaireComponent, {
        width: '500px',
      })
   }

  ngOnInit() {
  }

}
export interface PeriodicElement {
  voiture: string;
  id: number;
  client: string;
  date: string;
  duree: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, voiture: 'Koureissi', client:'Mohamed', date: '2023-10-12', duree: '08H'},
  {id: 2, voiture: 'Koureissi', client:'Mohamed', date: '2023-10-12', duree: '08H'},
  {id: 3, voiture: 'Koureissi', client:'Mohamed', date: '2023-10-12', duree: '08H'},
  {id: 4, voiture: 'Koureissi', client:'Mohamed', date: '2023-10-12', duree: '08H'},
  {id: 5, voiture: 'Koureissi', client:'Mohamed', date: '2023-10-12', duree: '08H'},
  {id: 6, voiture: 'Koureissi', client:'Mohamed', date: '2023-10-12', duree: '08H'},
];

