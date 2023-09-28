import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';

import { User, UserDTO, UserLoad, UserLogin} from '../models/user.model';
import { FirebaseAuth } from '../firebase/config';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = new BehaviorSubject< UserLoad | null >(null);

  user$ = this.user.asObservable();

  constructor(
    private router: Router,
    //public afs: AngularFirestore,
    //public afAuth: AngularFireAuth
  ) { }

  async login(email:string, password:string){

    try{

      const userResponse = await signInWithEmailAndPassword( FirebaseAuth, email,password );

      const { uid , displayName} = userResponse.user;


      this.user.next({uid,displayName,email});

      this.router.navigateByUrl('/admin');

    }
    catch (error:any) {

      return error.message;
      
    }

  }

  async loginWithGoogle(){

    try{

      const userResponse = await signInWithPopup(FirebaseAuth, new GoogleAuthProvider());

      const { uid, displayName, email } = userResponse.user;

     if(!email){ return false }

     this.user.next({uid,displayName,email});

      this.router.navigateByUrl('/admin/pagesbuilder');

    }

    catch(error:any){
      
      return error.message;
    
    }

  }


  
  logout(){ 

    FirebaseAuth.signOut(); 

  }


  async signIn(email:string, password:string, displayName:string){

  try{

    const createdUser = await createUserWithEmailAndPassword( FirebaseAuth, email, password );

    const { uid } = createdUser.user;

    if(FirebaseAuth.currentUser){

      await updateProfile( FirebaseAuth.currentUser, { displayName });

    } 
    
    this.user.next({uid,displayName,email});

    this.router.navigateByUrl('/admin');

   }

  catch (error:any) {

    return error.message;
    
  }

  }


}

  /*async loginWithGoogle(){
    this.afAuth.signInWithPopup(new GoogleAuthProvider())
  }*/

    //
    //private googleProvider:GoogleAuthProvider,
    //const result = signInWithPopup(FirebaseAuth, this.googleProvider );
