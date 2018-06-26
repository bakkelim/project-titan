import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppUserAuth } from './app-user-auth';
import { LOGIN_MOCKS } from './login-mocks';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  login(userName: string, password: string): Observable<AppUserAuth> {
    const appUserAuth = Object.assign({},
      LOGIN_MOCKS.find(user => user.userName.toLowerCase() ===
                               userName.toLowerCase()));
    // if (this.securityObject.userName !== "") {
    //   // Store into local storage
    //   localStorage.setItem("bearerToken",
    //      this.securityObject.bearerToken);
    // }

    return of<AppUserAuth>(appUserAuth);
  }
}
