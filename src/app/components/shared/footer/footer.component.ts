import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  anio: number;
  desarrollador: string = "Brayan Daza - Juan Arana";
  institucion: string = "FCECEP";


  lista:any;
  lista1:any[] =[];

  constructor() {
    let unvalor = 1;
    this.anio = new Date().getFullYear();
    console.log("UNVALOR",unvalor,"ANIO",this.anio);

    this.metodo1();
    let otroValor = this.metodo2(this.anio);
  }

  metodo1(){
    console.log(this.anio);
  }

  metodo2(unValor:any):any{
    return unValor;
  }


}
