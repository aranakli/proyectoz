import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // private heroes:Heroe[] = [
  //   {
  //     nombre: "Aquaman",
  //     bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
  //     img: "assets/img/aquaman.png",
  //     aparicion: "1941-11-01",
  //     casa:"DC",
  //     imgCasa:"assets/img/dc-logo.jpg",
  //     idHeroe:1
  //   },
  //   {
  //     nombre: "Batman",
  //     bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
  //     img: "assets/img/batman.png",
  //     aparicion: "1939-05-01",
  //     casa:"DC",
  //     imgCasa:"assets/img/dc-logo.jpg",
  //     idHeroe:2
  //   },
  //   {
  //     nombre: "Daredevil",
  //     bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
  //     img: "assets/img/daredevil.png",
  //     aparicion: "1964-01-01",
  //     casa: "Marvel",
  //     imgCasa:"assets/img/marvel-logo.png",
  //     idHeroe:3
  //   },
  //   {
  //     nombre: "Hulk",
  //     bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
  //     img: "assets/img/hulk.png",
  //     aparicion: "1962-05-01",
  //     casa:"Marvel",
  //     imgCasa:"assets/img/marvel-logo.png",
  //     idHeroe:4
  //   },
  //   {
  //     nombre: "Linterna Verde",
  //     bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
  //     img: "assets/img/linterna-verde.png",
  //     aparicion: "1940-06-01",
  //     casa: "DC",
  //     imgCasa:"assets/img/dc-logo.jpg",
  //     idHeroe:5
  //   },
  //   {
  //     nombre: "Spider-Man",
  //     bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
  //     img: "assets/img/spiderman.png",
  //     aparicion: "1962-08-01",
  //     casa: "Marvel",
  //     imgCasa:"assets/img/marvel-logo.png",
  //     idHeroe:6
  //   },
  //   {
  //     nombre: "Wolverine",
  //     bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
  //     img: "assets/img/wolverine.png",
  //     aparicion: "1974-11-01",
  //     casa: "Marvel",
  //     imgCasa:"assets/img/marvel-logo.png",
  //     idHeroe:7
  //   }
  //];

  private fotos:any[]= [
    {
      url: "https://i.blogs.es/12a5f3/aquaman-image2/1366_2000.jpg",
      idHeroe:1
    },
    {
      url: "https://img.asmedia.epimg.net/resizer/CtRPYXTLeCsrXRaUCTzY1d3GXrs=/1200x1200/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/7AADEIYYB5CSJESVVKV2MMNHVM.jpg",
      idHeroe:1
    },
    {
      url: "https://static.eldiario.es/clip/558a6e0d-6c94-478d-9511-30a66f09a92d_16-9-discover-aspect-ratio_default_0.jpg",
      idHeroe:1
    },
    {
      url: "https://i.blogs.es/cd20cf/1366_2000-9-/1366_2000.jpeg",
      idHeroe:2
    },
    {
      url: "https://i.pinimg.com/originals/57/f1/3e/57f13ec1b6e2d5712d03fec842e08356.jpg",
      idHeroe:2
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqS8l4leEIfoyYUn7I2tDO4nHgWwmIgG2aJA&usqp=CAU",
      idHeroe:2
    },
    {
      url: "https://www.mundodeportivo.com/alfabeta/hero/2023/11/daredevil-es-un-heroe-marvel.jpg?width=768&aspect_ratio=16:9&format=nowebp",
      idHeroe:3
    },
    {
      url: "https://i0.wp.com/www.universomarvel.com/wp-content/uploads/2023/08/DDBLKARMOR2023001_Grassetti.jpg?ssl=1",
      idHeroe:3
    },
    {
      url: "https://pbs.twimg.com/media/FWgU1ZTUIAIGOmH.jpg:large",
      idHeroe:3
    },
    {
      url: "https://hips.hearstapps.com/hmg-prod/images/el-increible-hulk-1554403044.jpg?crop=1xw:0.8888888888888888xh;center,top&resize=1200:*",
      idHeroe:4
    },
    {
      url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/05/hulk-25-curiosidades-gigante-esmeralda-marvel_0.jpg?tf=1200x1200",
      idHeroe:4
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrnOQ30TtuF5Jv9AmctVb0Zl1ReFy5bG-Wtw&usqp=CAU",
      idHeroe:4
    },
    {
      url: "https://static.wikia.nocookie.net/doblaje/images/b/b7/Linterna_verde_espanol_latino_poster.png/revision/latest?cb=20110506195612&path-prefix=es",
      idHeroe:5
    },
    {
      url: "https://static.wikia.nocookie.net/batman/images/8/88/Linterna-verde.jpg/revision/latest?cb=20170921191634&path-prefix=es",
      idHeroe:5
    },
    {
      url: "https://i.blogs.es/c12af0/2224860-2011_green_lantern_movie_1680x1050/1366_2000.jpeg",
      idHeroe:5
    },
    {
      url: "https://media.revistagq.com/photos/61c9832dec2157b47d0637e7/16:9/w_2911,h_1637,c_limit/marvel-spiderman.jpeg",
      idHeroe:6
    },
    {
      url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/04/logo-spider-man-3002282.jpg?tf=3840x",
      idHeroe:6
    },
    {
      url: "https://i.blogs.es/7bb0f0/captura-de-pantalla-2022-06-03-a-las-10.57.17/840_560.jpeg",
      idHeroe:6
    },
    {
      url: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/lobezno-inmortal/galeria/6344507-5-esl-ES/Lobezno-Inmortal.jpg",
      idHeroe:7
    },
    {
      url: "https://i.blogs.es/b07389/x_men_origins_wolverine/450_1000.jpg",
      idHeroe:7
    },
    {
      url: "https://www.mundiario.com/asset/thumbnail,1280,720,center,center/media/mundiario/images/2016/11/09/2016110918145196022.jpg",
      idHeroe:7
    },
  ];

  constructor() { }

  //Implementar el metodo que permite del
  //servicio retornar todos los heroes
  // getHeroes():Heroe[]{
  //  return this.heroes;
  //}

  //Implementar el metodo que trae un solo
  //heroe por el id
  //getHeroe( idx: number ){
  //  return this.heroes[idx - 1 ];
  //}
  getFotoHeroe(id: number){
    let coincidencias = [];
    for(var i = 0; i<this.fotos.length;i++){
        if(this.fotos[i].idHeroe == id){
            coincidencias.push(this.fotos[i]);
        }
    }
    return coincidencias;
  }

}
