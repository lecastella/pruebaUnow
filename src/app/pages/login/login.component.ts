import { LocalService } from './../../core/services/storage/local.service';
import { LoginService } from './../../core/services/http/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/core/services/utils/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private localSecureService: LocalService,
    private router: Router,
    private sweetAlertService: AlertsService
  ) { }

  ngOnInit(): void {
    this.localSecureService.setValue('login', false);
    this.setForm();
  }

  setForm() {
    this.loginForm = this.formBuilder.group({
      usuario: ['angular@endalia.com', [
        Validators.required,
        Validators.email
      ]],
      password: ['12345678', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8)
      ]],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.loginForm);
    if (this.loginForm.invalid) {
      return;
    }

    this.ingresar();
  }

  ingresar(){
    const dataLogin = {
      user: this.loginForm.value.usuario,
      pass: this.loginForm.value.password
    }
    const validaData = this.loginService.validaLogin(dataLogin);
    if (validaData) {
      this.localSecureService.setValue('login', true);
      this.router.navigate(['directorio']);
    } else {
      console.log('malo');
      this.sweetAlertService.swalErrorLogin();
    }
  }

}
