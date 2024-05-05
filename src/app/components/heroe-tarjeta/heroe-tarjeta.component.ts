import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {
  @Input() heroe!: Heroe;
  @Input() index!: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  fotos: any[] = [];
  constructor( private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  verHeroe(id: string) {
    this.router.navigate( ['/heroe',id] );
  }

  verFotos(id: string){
    this.router.navigate(['/heroe', id])
  }



}
