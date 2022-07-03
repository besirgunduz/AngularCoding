import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  login(loginModel: LoginModel) {
    let api = this.apiUrl + 'users/login';
    this.httpClient.post(api, loginModel).subscribe(
      (response: any) => {
        debugger;
        localStorage.setItem('token', response.data.token);
        this.router.navigate(["/"])
      },
      (error) => {}
    );
  }
}
