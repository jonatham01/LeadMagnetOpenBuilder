import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  title = 'Login';

  loginData = {
    email: '',
    password: '',
    emailError: false,
    passError: false
  };


  constructor(
    private authService:AuthService,
  ){}

  ngOnInit(): void {
      
  }

  toLogin() :void{

    if(this.loginData.email =='' && this.loginData.password ==''){ 
      this.loginData.emailError = true;
      this.loginData.passError=true;
    }
    else if(this.loginData.email !='' && this.loginData.password ==''){ 
      this.loginData.emailError = false;
      this.loginData.passError=true;
    }
   
    else if(this.loginData.email =='' && this.loginData.password !=''){
      this.loginData.emailError = true;
      this.loginData.passError=false;
    }
    else{
      this.loginData.emailError = false;
      this.loginData.passError=false;
      this.authService.login(this.loginData.email,this.loginData.password);
    }
    
  }

   toLoginWithGoogle(){
    this.authService.loginWithGoogle().then(data=>{
   });
  }

}
