import { Component } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesBDService } from 'src/app/services/heroes-db.service';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Heroe[] = [];

  constructor(private data: HeroesService, private dataBD: HeroesBDService) {
    // this.heroes = data.getHeroes();
    this.cargarHeroesV1();
    console.log(this.heroes);
  }

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
}
