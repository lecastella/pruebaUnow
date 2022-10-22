import { API_ENDPOINT } from './../../config/config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user = API_ENDPOINT.user;
  private pass = API_ENDPOINT.clave;

  constructor() { }

  validaLogin(data:any): boolean {

    if (data.user == this.user && data.pass == this.pass) {
      return true;
    } else {
      return false;
    }
  }

}
