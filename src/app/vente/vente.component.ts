import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { VenteFormulaireComponent } from 'app/vente-formulaire/vente-formulaire.component';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule],
})
export class VenteComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'voiture', 'client', 'date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {  
    this.dataSource.paginator = this.paginator;
  }
  constructor(private matDialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    openDialog() {
      this.matDialog.open(VenteFormulaireComponent, {
        width: '500px',
      })
   }

}
export interface PeriodicElement {
  voiture: string;
  id: number;
  client: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, voiture: 'Toyota CHR', client:'Mohamed', date: '2023-10-12'},
  {id: 2, voiture: 'Toyota CHR', client:'Mohamed', date: '2023-10-12'},
  {id: 3, voiture: 'Toyota CHR', client:'Mohamed', date: '2023-10-12'},
  {id: 4, voiture: 'Toyota CHR', client:'Mohamed', date: '2023-10-12'},
  {id: 5, voiture: 'Toyota CHR', client:'Mohamed', date: '2023-10-12'},
  {id: 6, voiture: 'Toyota CHR', client:'Mohamed', date: '2023-10-12'},
  {id: 7, voiture: 'Toyota CHR', client:'Mohamed', date: '2023-10-12'},
];
