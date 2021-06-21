import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  photos: string;
  price: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Aser', price:'999', photos: 'assets/pic.png'},
  {name: 'Aser', price:'999', photos: 'assets/pic.png'},
  {name: 'Aser', price:'999', photos: 'assets/pic.png'},
  {name: 'Aser', price:'999', photos: 'assets/pic.png'}

];
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['name','price','photos','actions'];
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
