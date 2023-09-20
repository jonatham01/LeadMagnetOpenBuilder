import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';

import { User, UserDTO, UserLoad, UserLogin} from '../models/user.model';
import { FirebaseAuth } from '../firebase/config';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = new BehaviorSubject< UserLoad | null >(null);

  user$ = this.user.asObservable();

  constructor(
    private router: Router,
  ) { }

  async login(email:string, password:string){

    try{

      const userResponse = await signInWithEmailAndPassword( FirebaseAuth, email,password );

      const { uid, displayName } = userResponse.user;

      this.user.next({uid,displayName,email});

      this.router.navigateByUrl('/admin');

    }
    catch (error:any) {

      return error.message;
      
    }

  }

  



}

    //
    //private googleProvider:GoogleAuthProvider,
    //const result = signInWithPopup(FirebaseAuth, this.googleProvider );
