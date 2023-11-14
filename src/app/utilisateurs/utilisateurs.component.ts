import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule],
})
export class UtilisateursComponent {
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email','telephone'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {  
    this.dataSource.paginator = this.paginator;
  }


}
export interface PeriodicElement {
  nom: string;
  id: number;
  prenom: string;
  email: string;
  telephone:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nom: 'Koureissi', prenom:'Mohamed', email: 'koureissi89@gmail.com', telephone:'ACI 2000'},
];

