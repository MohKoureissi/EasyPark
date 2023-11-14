import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-parking-inactif',
  templateUrl: './parking-inactif.component.html',
  styleUrls: ['./parking-inactif.component.scss'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule],
})
export class ParkingInactifComponent {
  displayedColumns: string[] = ['id', 'nomAdmin', 'nomParking', 'email','agrement', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {  
    this.dataSource.paginator = this.paginator;
  }


}
export interface PeriodicElement {
  nomParking: string;
  id: number;
  nomAdmin: string;
  email: string;
  agrement:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nomParking: 'Koureissi', nomAdmin:'Mohamed', email: 'koureissi89@gmail.com', agrement: './assets/img/angular.png' },
];

