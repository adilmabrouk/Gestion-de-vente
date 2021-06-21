import { FlashMessagesService } from 'flash-messages-angular';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string;
  password : string;
  constructor( private auth : AuthService , private route : Router,private _flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {

    this.auth.getAuth().subscribe(auth =>{
      if(auth){
        return this.route.navigate(['']);
      }
    })
  }


  onLogin(){
    this.auth.login(this.email , this.password)
    .then(auth =>{
      if(auth){
          this.route.navigate(['/']);
      }
    }).catch(err =>{
      this._flashMessagesService.show(err.message, { cssClass: 'alert-success', timeout: 5000 });
    })
  }

  loginWithGoogle(){
    this.auth.loginWithGoogle()
    .then(auth =>{
      if(auth){
          this.route.navigate(['/']);
      }
    }).catch(err =>{
      this._flashMessagesService.show(err.message, { cssClass: 'alert-success', timeout: 5000 });
    })
  }
}
