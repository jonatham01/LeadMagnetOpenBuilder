import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, switchMap, tap, throwError } from 'rxjs';
import { CreateUserDTO, User, UserLoad } from '../models/user.model';
import { TokenService } from './token.service';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { AuthUser } from '../models/authUser.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private apiUrl = `${environment.URL}/data/api/user`;
  
  private apiUrl:string = '/data/api/user';

  private user = new BehaviorSubject<UserLoad | null>(null);

  user$ = this.user.asObservable();

  constructor(
    private token: TokenService,
    private http: HttpClient,  
    private router: Router
    ) { }

  login(email:string,password:string){

    return this.http.post<AuthUser>(`${this.apiUrl}/login/autenticated`,{email,password})

    .pipe(

      tap(response => {this.token.save(response.jwt);}),

      catchError((error: HttpErrorResponse,) => {

        if (error.status === HttpStatusCode.Conflict) {

          return throwError('Algo esta fallando en el server');

        }

        if (error.status === HttpStatusCode.NotFound) {

          return throwError('No existe');

        }

        if (error.status === HttpStatusCode.Unauthorized) {

          return throwError('No estas permitido');

        }
        return throwError(error.message);
        
    })

    ); 



  }

  getProfile(){

    return this.http.post<UserLoad>(`${this.apiUrl}/profile`,this.token.getToken());

  }

  loginAndGet(email:string,password:string){

    return this.login(email, password)
    .pipe(
      
      switchMap(() => this.getProfile()),
      
      )

  }

  logOut(){

    this.token.removeToken();

    this.user.next(null);
  }

  getCurrentUser() {

    const access = this.token.getToken();

    if (access) {

      this.getProfile()

      .subscribe()

    }

  }

  create(user:CreateUserDTO){

    return this.http.post<AuthUser>(`${this.apiUrl}/save/autenticated`,user)

    .pipe(

      tap(response => this.token.save(response.jwt)),

      catchError((error: HttpErrorResponse,) => {

        if (error.status === HttpStatusCode.Conflict) {

          return throwError('Algo esta fallando en el server');

        }

        if (error.status === HttpStatusCode.NotFound) {

          return throwError('No existe');

        }

        if (error.status === HttpStatusCode.Unauthorized) {

          return throwError('No estas permitido');

        }
        return throwError(error.message);
        
    })

    ); 
  }
  
  toLogin(email:string,password:string){
    this.loginAndGet(email,password).subscribe(
      (user)=>{
        if(user){
          this.user.next(user);
          
          
          this.router.navigateByUrl('/admin');
        }
      }
    );
    
  }
}


/*
export class AuthService {

  private user = new BehaviorSubject< UserLoad | null >(null);

  user$ = this.user.asObservable();

  constructor(
    private router: Router,
  ) { }

  validateUser(uid:string,displayName:string,email:string){
    this.user.next({uid, displayName, email});
  }

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

      this.createPage(uid,{displayName,email});

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

  createPage(uid:string,data:any){
    const newDoc = doc(FirebaseDB, `${uid}/user` );
    setDoc(newDoc,data);
  }



}*/