import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  name: string;
  birthdate: string;
  gender: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Adil', birthdate:' 1-10-1999', gender: 'Male'},
  {name: 'Sanae', birthdate:' 1-10-1999', gender: 'Female'},
  {name: 'Kamal', birthdate:' 1-10-1999', gender: 'Male'},

];

@Component({
  selector: 'app-costumers',
  templateUrl: './costumers.component.html',
  styleUrls: ['./costumers.component.css']
})
export class CostumersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'birthdate', 'gender','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  panelOpenState = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }

  openDialog() {

  }

  deleteUser(id){

  }

}
