// a la de Diosq funcione el nuevo metodo getFotosPorHeroe para realizar filtro y llamar de acuerdo al id
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotosHeroeService } from 'src/app/services/fotos-heroe.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  fotos: { idHeroe: string; url: string; }[] = [];

  constructor(
    private route: ActivatedRoute,
    private fotosHeroeService: FotosHeroeService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const idHeroe = params['idHeroe'];
      this.fotos = this.fotosHeroeService.getFotosPorHeroe(idHeroe);
    });
  }
}
