import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDirectorio(): any {

    try {
      return this.httpClient.get('./assets/data/data.json').toPromise();
    } catch (error) {
      return { status: false, code: error, message: 'Error al ejecutar la petición.' };
    }
  }

}
