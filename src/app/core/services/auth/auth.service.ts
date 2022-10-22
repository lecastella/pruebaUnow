import { LocalService } from './../storage/local.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private localSecureService: LocalService
  ) { }

  isAuthenticated(): boolean {
    if (this.localSecureService.getValue('login')) {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.clear();
    this.localSecureService.clearToken();
    window.location.href = `${window.location.origin}`;
  }

}
