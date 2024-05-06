import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesBDService } from 'src/app/services/heroes-db.service';
import { HeroesService } from 'src/app/services/heroes.service';
import { MongoDBService } from '../../services/mongo-db.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  visualizacion:string = 'grid';
  cargando:boolean = false;

  heroes: Heroe[] = [];
  Heroes!: Heroe[];

  unResultado!:any;
  unaAccion: string = 'Mensaje';
  unMensaje: string = '';

  constructor(private data: HeroesService,
              private router: Router,
              private dataBDM: MongoDBService,
              private dataBD: HeroesBDService) {
    // this.heroes = data.getHeroes();
    this.cargarHeroesV1();
    console.log(this.heroes);
  }

  ngOnInit() {
    this.cargarHeroesBD();
    // this.heroes = this.data.getHeroes();

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

  async cargarHeroesBD() {
    //this.cargando = true;
    await this.dataBDM
    .getHeroes()
    .toPromise()
    .then((data:any) =>{
      this.Heroes = data.resp;
      console.log(this.Heroes)
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

  verFotos(id: string){
    this.router.navigate(['/heroe', id])
  }

  editarHeroe(unIdHeroe:any){
    this.router.navigate(['/heroeedit', unIdHeroe]);
  }

  eliminarHeroe(unHeroe: any) {
    //console.log(this.unaDivision);
    this.dataBDM.crud_Heroes(unHeroe, 'eliminar').subscribe(
      (res: any) => {
        this.unResultado = res;

        //console.log(this.unResultado);
        if (this.unResultado.Ok == true) {

           Swal.fire({
            icon: 'info',
            title: 'Information',
            text: 'Heroe Eliminado',
          });

          this.unaAccion = 'Mensaje:';
          this.unMensaje = 'Heroe Eliminado';
          setTimeout(() => (this.unMensaje = ''), 3000);


          this.cargarHeroesBD() ;

        } else {
          Swal.fire({
            icon: 'info',
            title: 'Information',
            text: this.unResultado.msg,
          });


          this.unaAccion = 'Error:';
          this.unMensaje = this.unResultado.msg;
          setTimeout(() => (this.unMensaje = ''), 3000);
        }
      }
      ,(error:any) => {
        console.error(error)
      }
    );
  }

}
