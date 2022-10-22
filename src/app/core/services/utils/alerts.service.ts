import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
//import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  swalErrorLogin() {
    const html = `<div class="modal-content">
                      <div class="modal-header text-center">

                      </div>
                      <div class="modal-body pb-5">
                          <img src="assets/img/alert.svg">
                          <h3 class="mt-2">¡Autenticación fallida!</h3>
                          <hr class="w-50 mx-auto">
                          <h6 class="mt-2">Las credenciales son incorrectas</h6>
                      </div>
                      <div class="modal-footer">
                          <div class="row mx-auto">
                              <h5>Intente nuevamente...</h5>
                          </div>
                      </div>
                    </div>`
    Swal.fire({
      width: 550,
      html,
      position: 'center',
      background: 'transparent',
      showConfirmButton: false,
      timer: 2000
    });
  }
}
