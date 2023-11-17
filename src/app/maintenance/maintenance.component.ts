import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { MaintenanceFormulaireComponent } from 'app/maintenance-formulaire/maintenance-formulaire.component';
import {Maintenance} from 'app/model/maintenance';
import { MatSort } from '@angular/material/sort';
import { MaintenanceService } from 'app/maintenance.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule],
})
export class MaintenanceComponent implements OnInit{
  displayedColumns: string[] = ['idMaintenance', 'voiture', 'prix', 'date', 'description'];
  dataSource = new MatTableDataSource<Maintenance>();
  maintenances: Maintenance[]= [];

  @ViewChild(MatSort ) sort!: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialogRef: MatDialog, private mainteService: MaintenanceService) {
    
    this.dataSource = new MatTableDataSource(this.maintenances);
  }
  ngOnInit(): void {
    this.mainteService.getAllMaintenances().subscribe(maintenance => {
      this.maintenances = maintenance;
      this.dataSource = new MatTableDataSource(this.maintenances);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
    openDialog() {
      const dialog = this.dialogRef.open(MaintenanceFormulaireComponent, {
        width: '400px',
      })
   }
 
 

}
