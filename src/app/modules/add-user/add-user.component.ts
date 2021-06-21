import Swal from 'sweetalert2';
import { UsersService } from 'src/app/services/users.service';
import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormGroup , FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  users : User = {
    name : "",
    email : "",
    roles:"",
    status:"active"
  }
  constructor( private usersService:UsersService ,
               public dialog: MatDialog,
               private route : Router) { }

  ngOnInit(): void {
  }

  addUser(users){

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'user added successfully!',
      showConfirmButton: false,
      timer: 2000
    })
    this.usersService.addUser(users);

    // return this.route.navigate(['users']);
  }


  //Validate Form

  forms = new FormGroup({

    name : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z ]*')
    ]),

    email : new FormControl('',[
      Validators.required,
      Validators.email
    ]),

    roles : new FormControl('',Validators.required)
  })

  get name()
  {
    return this.forms.get('name');
  }

  get email()
  {
    return this.forms.get('email');
  }

  get roles()
  {
    return this.forms.get('roles');
  }

}
