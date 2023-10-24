import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";

      export const response=  new Promise((myResolve, myReject) =>{

        onAuthStateChanged(FirebaseAuth, (user) =>{
          if ( user ) {
            const { uid, email, displayName} = user;
           // if (displayName && email) {this.authService.validateUser(uid, displayName, email,);}
            myResolve(true);
          }
          else{
            myResolve(false);
          }
          
        });

      });