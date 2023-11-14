import * as Chartist from 'chartist';
import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-dashboard-super-admin',
  templateUrl: './dashboard-super-admin.component.html',
  styleUrls: ['./dashboard-super-admin.component.scss'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule],
})
export class DashboardSuperAdminComponent implements OnInit{
  displayedColumns: string[] = ['id', 'nomAdmin', 'nomParking', 'email','localisation'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {  
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
      
  }

}
export interface PeriodicElement {
  nomParking: string;
  id: number;
  nomAdmin: string;
  email: string;
  localisation:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nomParking: 'Koureissi', nomAdmin:'Mohamed', email: 'koureissi89@gmail.com', localisation:'ACI 2000'},
  {id: 2, nomParking: 'Koureissi', nomAdmin:'Mohamed', email: 'koureissi89@gmail.com', localisation:'ACI 2000'},
  {id: 3, nomParking: 'Koureissi', nomAdmin:'Mohamed', email: 'koureissi89@gmail.com', localisation:'ACI 2000'},
];
