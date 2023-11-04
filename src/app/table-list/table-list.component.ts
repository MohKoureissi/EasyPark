import { Component, OnInit } from '@angular/core';

import { Dialog } from '@angular/cdk/dialog';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
