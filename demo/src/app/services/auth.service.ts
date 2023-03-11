import { Iuser } from './../models/iuser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
currentuser:Iuser|undefined;
  constructor() { }
  login(username: string, password: string) {
    this.currentuser = {
      username: username,
      password: password,
    };
  }

  get isLoggedIn(): boolean {
    if (this.currentuser?.username && this.currentuser.password) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    this.currentuser = undefined;
  }
}
