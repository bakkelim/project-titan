import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppAuthUser } from '../state/app-user-auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private httpClient: HttpClient) { }

  login(userName: string, password: string): Observable<AppAuthUser> {

    // const url = 'https://localhost:5001/api/authentication';
    const url = 'https://titanapi-dotnetcore.azurewebsites.net/api/authentication';

    const payload = {
      username: userName,
      password: password,
    };
    return this.httpClient.post<AppAuthUser>(url, payload, httpOptions);

    // if (this.securityObject.userName !== "") {
    //   // Store into local storage
    //   localStorage.setItem("bearerToken",
    //      this.securityObject.bearerToken);
    // }
  }
}
