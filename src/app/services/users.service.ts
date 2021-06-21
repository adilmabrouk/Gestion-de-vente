import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection ,AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersCollection : AngularFirestoreCollection<User>;
  usersDoc :  AngularFirestoreDocument<User>;
  // users :Observable<User[]>;
  constructor( private db : AngularFirestore)
  {
    this.usersCollection =  this.db.collection('users');

  }

  getUsers() : Observable<User[]>
  {
    return this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  addUser(user : User)
  {
     this.usersCollection.add(user);
  }

  getUserById(id : string) : Observable<User>
  {
    return this.usersCollection.doc(id).valueChanges();
  }

  updateUser(user : User)
  {
       this.usersDoc = this.usersCollection.doc(user.id);
       this.usersDoc.update(user);
  }

  deleteUser(id : string)
  {
       this.usersDoc = this.usersCollection.doc(id);
       this.usersDoc.delete();
  }
}
