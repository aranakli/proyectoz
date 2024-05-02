import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  titulo:string = "Encabezado";

  constructor(){
    this.titulo = this.titulo;

    console.log(this.titulo);

  }
}