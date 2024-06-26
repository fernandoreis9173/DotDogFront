import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor(private httpClient: HttpClient) {
    }

    private readonly baseUrl = environment["endPoint"];

    login(username: string, password: string) {
      console.log("o que tem aqui?",`${this.baseUrl}/auth/login` );
      
        return this.httpClient.post<any>(`${this.baseUrl}/auth/login`, { username: username, password: password }).pipe(
          catchError((error) => {
            console.error('Error during login:', error);
            return throwError('Something went wrong during login.');
          }))
    }

    register(username: string, name: string, email: string, password: string) {
      return this.httpClient.post<any>(`${this.baseUrl}/auth/register`, { username: username, name: name, email: email, password: password }).pipe(
        catchError((error) => {
          console.error('Error during registration:', error);
          return throwError('Something went wrong during registration.');
        }))
  }

}
