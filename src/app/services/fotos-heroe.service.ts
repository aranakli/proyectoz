import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FotosHeroeService {
  private fotos: { idHeroe: string; url: string; }[] = [
    
    { idHeroe: '1', url: 'https://pics.filmaffinity.com/Aquaman-355320736-large.jpg' },
    { idHeroe: '1', url: 'https://pics.filmaffinity.com/Aquaman-355320736-large.jpg' },
    { idHeroe: '1', url: '' },
    
  ];
  
  constructor() { }

  getFotos(): { idHeroe: string; url: string; }[] {
    return this.fotos;
  }

  getFotosPorHeroe(idHeroe: string): { idHeroe: string; url: string; }[] {
    return this.fotos.filter(foto => foto.idHeroe === idHeroe);
  }
}
