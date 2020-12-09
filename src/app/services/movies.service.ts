import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { bcrypt } from 'bcryptjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public user: any;
  public db: any;
  
  

  constructor(
  public fireauth:AngularFireAuth,
  public firestore:AngularFirestore,
  public router: Router) {

    this.fireauth.onAuthStateChanged((user) => {
      if(!!user)
      {this.user = user}else {this.db = ''}
    });

   }
   // Register The User
   registeringUser(user: any, callback: any) {
    this.firestore.collection('Users', ref => ref.where('email', '==', user.email))
    .get().subscribe(snap=> {
      if(!snap.size) {
        const hash = bcrypt.hashSync(user.password, 10);
        this.firestore.collection('Users').add({
          email: user.email,
          password: hash
        })
      }
    })
   }
   //Logging in The User
   loginUser() {
   
   }
   //Logging out The User
   logoutUser(): void {
     this.fireauth.signOut();

   }
   //Pulling back the Movie Data
   getFirestoreData(): void {
    if (this.user) {
      console.log('none');
      this.firestore
      .collection('Movies')
      .get()
      .subscribe((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          console.log(doc.id);
        });
      });

    }
  }
  // addMovie(): void {

  // }
  }

   

