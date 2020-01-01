import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public afauth: AngularFireAuth) { }
  loginWithGoogle() {
    return this.afauth
        .auth
        .signInWithPopup( new auth.GoogleAuthProvider());
  }
  logout() {
    return this.afauth.auth.signOut();
  }
}
