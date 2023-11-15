import * as Chartist from 'chartist';
import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { SuperAdmin } from 'app/model/superAdmin';
import { MatSort } from '@angular/material/sort';
import { AdminParkingServiceService } from 'app/admin-parking-service.service';
@Component({
  selector: 'app-dashboard-super-admin',
  templateUrl: './dashboard-super-admin.component.html',
  styleUrls: ['./dashboard-super-admin.component.scss'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule],
})
export class DashboardSuperAdminComponent implements OnInit{
  displayedColumns: string[] = ['id', 'nomAdmin', 'nomParking', 'email','localisation'];
  dataSource = new MatTableDataSource<SuperAdmin>();
  admin: SuperAdmin[]=[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort ) sort!: MatSort;

  constructor(private adminParking :AdminParkingServiceService){
    this.dataSource= new MatTableDataSource(this.admin)
  }

  ngAfterViewInit() {  
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
      this.adminParking.getAllAdminParking().subscribe(admins=>{
      this.admin = admins;
      this.dataSource = new MatTableDataSource(this.admin);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
 });
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

