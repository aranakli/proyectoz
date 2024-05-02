import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesBDService } from 'src/app/services/heroes-db.service';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  fotosDelHeroe!:any[]
  id!: number;

  constructor(private activatedroute: ActivatedRoute, private data: HeroesService, private dataBD: HeroesBDService) {
    this.activatedroute.params.subscribe(params =>{
      this.id = params['id'];

    })
    this.cargarFotosV1(this.id);
  }


  async cargarFotosV1(id:number) {
    await this.dataBD
      .buscarFotoHeroes(id)
      .toPromise()
      .then((resp: any) => {
        //this.heroes = resp.data;
    //la linea anterior cambiarla asi:
        //ya que los Datos vienen en la resp
         this.fotosDelHeroe = resp.resp;


      });

    }

}
