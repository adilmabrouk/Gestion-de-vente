import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../../interfaces/user';
import { FormGroup , FormControl, Validators } from "@angular/forms";
import Swal from 'sweetalert2'
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id : string;
  users : User;
  constructor(  private usersService: UsersService,
                private router : ActivatedRoute,
                private route : Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.usersService.getUserById(this.id).subscribe(user =>{
      this.users = user;
      // console.log(this.users);
    })

  }

  getUserById(id : string){

  }

  updateUser(users){

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')

        this.users.id = this.id;
        this.usersService.updateUser(users);
        return this.route.navigate(['users']);


      } else if (result.isDenied) {

        Swal.fire('Changes are not saved', '', 'info')
        return this.route.navigate(['users']);
      }
    })

  }

  backToUsers(){
    return this.route.navigate(['users']);
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
