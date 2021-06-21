import { User } from './../../interfaces/user';
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddUserComponent } from '../add-user/add-user.component';
import { MatDialog } from "@angular/material/dialog";
import Swal from 'sweetalert2'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : User[];

  displayedColumns: string[] = ['name', 'email', 'roles', 'status','actions'];
  dataSource : MatTableDataSource<User>

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private usersService : UsersService,private dialog: MatDialog) {

  }

  ngOnInit(): void {


    this.usersService.getUsers().subscribe(users =>
      {
      this.users = users;
      this.dataSource = new MatTableDataSource<User>(this.users)
      this.dataSource.paginator = this.paginator;
    })
  }

  openDialog() {
    this.dialog.open(AddUserComponent);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  deleteUser(id){

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.usersService.deleteUser(id);


        Swal.fire(
          {
            title: 'Deleted!',
            text: 'user has been deleted.',
            icon: 'success',
            timer : 2000
          }
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          {
            title: 'Cancelled!',
            icon: 'error',
            timer : 2000
          }
        )
      }
    })

  }

}
