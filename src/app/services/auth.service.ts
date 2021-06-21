
import { Injectable } from '@angular/core';
import { AngularFireAuth  } from "@angular/fire/auth";
import firebase  from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = null;

  constructor(private auth : AngularFireAuth) { }


  login(email:string , password:string){
       return new Promise((resolve , reject)=>{
        this.auth.signInWithEmailAndPassword(email , password)
        .then((userData)=> resolve(userData) , (error)=>reject(error))
       } )
  }

  getAuth()
  {
    return this.auth.authState
  }

  loginWithGoogle(){
    return new Promise((resolve , reject)=>{
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userData)=> resolve(userData) , (error)=>reject(error))
     } )
  }

  logOut(){
    this.auth.signOut();
  }
}
