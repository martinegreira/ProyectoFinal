import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthInfo } from '../core.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authInfo: AuthInfo;

  constructor(private http: HttpClient) {}

  login({ email, password }) {
    return this.http
      .post(`${environment.apiBaseUrl}/account/login`, {
        email,
        password
      })
      .pipe(tap((info: AuthInfo) => (this.authInfo = info)));
  }

  register({ fullName, email, password }) {
    return this.http.post(`${environment.apiBaseUrl}/account`, {
      fullName,
      email,
      password
    });
  }
}
