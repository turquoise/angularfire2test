import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {



  user: Observable<firebase.User>;
  data;

  constructor(public afAuth: AngularFireAuth) {
      this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());


  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser(): Observable<any> {
    return this.user
      .map( res => {
        this.data = res;
        console.log('res ', res);
        return this.data;
      });

  }


}
