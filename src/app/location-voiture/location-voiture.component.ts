import * as Chartist from 'chartist';
import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { LocationFormulaireComponent } from 'app/location-formulaire/location-formulaire.component';
import { MatSort } from '@angular/material/sort';
import { LocationService } from 'app/location.service';

@Component({
  selector: 'app-location-voiture',
  templateUrl: './location-voiture.component.html',
  styleUrls: ['./location-voiture.component.scss'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule],
})
export class LocationVoitureComponent implements OnInit {
  displayedColumns: string[] = ['idLocation', 'voiture', 'client','prix' ,'duree','dateLocation'];
  dataSource = new MatTableDataSource<Location>();
  locations: Location[] = [];
 
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort ) sort!: MatSort;
  constructor(private locationService: LocationService ,private dialogRef: MatDialog) {
    
    // this.dataSource = new MatTableDataSource(this.locations);
  }

  ngOnInit(): void {
    this.locationService.getAllLocations().subscribe(location => {
      this.locations = location;
      this.dataSource = new MatTableDataSource(this.locations);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialog() {
    const dialog = this.dialogRef.open(LocationFormulaireComponent, {
      width: '400px',
    })
 }

}