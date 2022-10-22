import { EmpleadosService } from './../../core/services/http/empleados.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {
  directorio: any;
  apellidos!: string;

  constructor(
    private router: Router,
    private empleadosService: EmpleadosService
  ) { }

  ngOnInit(): void {
    this.getDirectorio();
  }

  async getDirectorio() {
    const directorio = await this.empleadosService.getDirectorio();
    this.directorio = this.sortJSON(directorio, 'apellidos');
      console.log(this.directorio);
  }

  sortJSON(data: any, key: any) {
    return data.sort(function (a: any, b: any) {
      var x = a[key],
        y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));

    });
  }

  search(){
    if (this.apellidos != "") {
      this.directorio = this.directorio.filter((res: any) =>{
      return res.nombres.toLocaleLowerCase().match(this.apellidos.toLocaleLowerCase())
      || res.apellidos.toLocaleLowerCase().match(this.apellidos.toLocaleLowerCase())
      || res.puesto.toLocaleLowerCase().match(this.apellidos.toLocaleLowerCase())
      || res.telefono.toLocaleLowerCase().match(this.apellidos.toLocaleLowerCase())
      || res.mail.toLocaleLowerCase().match(this.apellidos.toLocaleLowerCase());


    });
    } else {
      this.getDirectorio();
    }

  }

    logout(){
      localStorage.clear();
      this.router.navigate(['']);
    }

  }
