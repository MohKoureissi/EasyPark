import {AfterViewInit, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { VenteFormulaireComponent } from 'app/vente-formulaire/vente-formulaire.component';
import { Achat } from 'app/model/achat';
import { MatSort } from '@angular/material/sort';
import { VenteServiceService } from 'app/vente-service.service';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss'],
  standalone: true, 
  imports: [MatTableModule, MatPaginatorModule],
})
export class VenteComponent implements OnInit {
  displayedColumns: string[] = ['idAchat', 'voiture', 'client','prix' ,'dateAchat'];
  dataSource = new MatTableDataSource<Achat>();
  achats: Achat[] = [];
 
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort ) sort!: MatSort;
  constructor(private venteService: VenteServiceService ,private dialogRef: MatDialog) {
    
   
    this.dataSource = new MatTableDataSource(this.achats);
  }

  ngOnInit(): void {
    this.venteService.getAllAchats().subscribe(achat => {
      this.achats = achat;
      this.dataSource = new MatTableDataSource(this.achats);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
    openDialog() {
      const dialog = this.dialogRef.open(VenteFormulaireComponent, {
        width: '400px',
      })
   }

}
