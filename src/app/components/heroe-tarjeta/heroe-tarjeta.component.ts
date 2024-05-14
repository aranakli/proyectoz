import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesBDService } from 'src/app/services/heroes-db.service';
import { HeroesService } from 'src/app/services/heroes.service';
import { MongoDBService } from '../../services/mongo-db.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {
  cargando:boolean = false;
  @Input() heroe!: Heroe;
  @Input() index!: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  heroes: Heroe[] = [];
  Heroes!: Heroe[];
  fotos: any[] = [];
  unResultado!:any;
  unaAccion: string = 'Mensaje';
  unMensaje: string = '';

  constructor( private router: Router,
               private dataBDM: MongoDBService,
               private dataBD: HeroesBDService) {
               this.heroeSeleccionado = new EventEmitter();
   }

  verHeroe(id: string) {
    this.router.navigate( ['/heroe',id] );
  }

  verFotos(id: string){
    this.router.navigate(['/heroe', id])
  }

  editarHeroe(unIdHeroe:any){
    this.router.navigate(['/heroeedit', unIdHeroe]);
  }

  eliminarHeroe(unIdHeroe: any) {
    console.log(unIdHeroe);
    this.dataBDM.crud_Heroes(unIdHeroe, 'eliminar').subscribe(
      (res: any) => {
        this.unResultado = res;

        console.log(this.unResultado);
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

}


