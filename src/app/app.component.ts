import { Component } from '@angular/core';
import { DatosExamenService } from './services/datos-examen.service';
import { Examen } from './modelos/Examen';
import { FormGroup, FormControl } from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen';
  informacion: Examen[];
  padres: Examen[];
  hijos: Examen[];
  nietos: Examen[];

  constructor (private examenService: DatosExamenService) {}

  ngOnInit(): void {
    this.examenService.getDatos().subscribe( data => { 
      this.informacion = data;
      this.padres = this.informacion.filter((element) => {return element.idPadre === 0});
      this.cambioDatos(1, true);
    });
  }

  cambioDatos (idPadre: number, hijo: boolean) {
    if (hijo){
      this.hijos = this.informacion.filter((element) => {return element.idPadre == idPadre});
      if (this.hijos.length > 0) {
        this.nietos = this.informacion.filter((element) => {return element.idPadre == this.hijos[0].id});
      } else {
        this.nietos = [];
      }
    } else {
      this.nietos = this.informacion.filter((element) => {return element.idPadre == idPadre});
    }
  }
}
