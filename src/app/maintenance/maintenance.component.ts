import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { MaintenanceFormulaireComponent } from 'app/maintenance-formulaire/maintenance-formulaire.component';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule],
})
export class MaintenanceComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['id', 'voiture', 'prix', 'date', 'description'];
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
    this.matDialog.open(MaintenanceFormulaireComponent, {
      width: '500px',
    })
 }

}
export interface PeriodicElement {
  voiture: string;
  id: number;
  prix: number;
  date: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, voiture: 'Toyota CHR', prix: 20000, date: '2023-10-12', description:'Ma première Maintenance'},
  {id: 2, voiture: 'Toyota CHR', prix: 20000, date: '2023-10-12', description:'Ma première Maintenance'},
  {id: 3, voiture: 'Toyota CHR', prix: 20000, date: '2023-10-12', description:'Ma première Maintenance'},
  {id: 4, voiture: 'Toyota CHR', prix: 20000, date: '2023-10-12', description:'Ma première Maintenance'},
  {id: 5, voiture: 'Toyota CHR', prix: 20000, date: '2023-10-12', description:'Ma première Maintenance'},
  {id: 6, voiture: 'Toyota CHR', prix: 20000, date: '2023-10-12', description:'Ma première Maintenance'},
];
