import { Component, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {
  @Input() heroe!: Heroe;

  fotos: any[] = [];
  constructor( private router: Router) { }

  verFotos(id: string){
    this.router.navigate(['/heroe', id])
  }
}
