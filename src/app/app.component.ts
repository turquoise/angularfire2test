import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AsyncPipe } from '@angular/common';
//import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase/app';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: FirebaseListObservable<any[]>;
  //user: Observable<firebase.User>;

  private mysubscription: Subscription;

  appUser: any;
  email: any;

  constructor(
    private db: AngularFireDatabase,
    //public afAuth: AngularFireAuth
    private auth: AuthService
  ) {
    this.items = db.list('/items');
    //this.user = afAuth.authState;
    //console.log('this.user ', this.user);
    this.mysubscription = auth.appUser.subscribe( data => {
      this.appUser = data;
      this.email = data.email;
      console.log('this.appUser ', this.appUser);
      console.log('this.email ', this.email);
    });


  }

  login() {
    //this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    //this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.auth.login();


  }

  logout() {
    this.mysubscription.unsubscribe();
    this.email = '';
    this.auth.logout();
  }





}
