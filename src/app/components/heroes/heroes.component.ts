import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesBDService } from 'src/app/services/heroes-db.service';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  visualizacion:string = 'grid';
  cargando:boolean = false;

  heroes: Heroe[] = [];

  constructor(private data: HeroesService,
              private router: Router,
              private dataBD: HeroesBDService) {
    // this.heroes = data.getHeroes();
    this.cargarHeroesV1();
    console.log(this.heroes);
  }

  ngOnInit() {
    this.heroes = this.data.getHeroes();

    //this.cargarData();

    console.log( this.heroes );

  }

  cambiarVisualizacion(unaVisualizacion:string){
    this.visualizacion = unaVisualizacion;
  }

  async cargarData() {
    await this.cargarHeroes();

  }

  async cargarHeroes() {
    this.cargando = true;
    await this.dataBD
      .getHeroes()
      .toPromise()
      .then((resp: any) => {
        this.heroes = resp.data;

        this.cargando = false;
      });
  }

  // verHeroe( idx:number ){
  //   this.router.navigate( ['/heroe',idx] );
  // }


  async cargarHeroesV1() {

    await this.dataBD
      .getHeroes()
      .toPromise()
      .then((resp: any) => {
        //this.heroes = resp.data;
        //la linea anterior cambiarla asi:
        //ya que los Datos vienen en la resp
        this.heroes = resp.resp;
      });
  }
  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );
  }
}
