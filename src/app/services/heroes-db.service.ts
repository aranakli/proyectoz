import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS_MONGODB } from '../config/url.servicios';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesBDService {

  userToken: any;

  constructor(public http : HttpClient)
  {

  }

  getHeroes(): //Observable<Heroe[]>
   any {
     var headers_object = new HttpHeaders().set('x-token', this.leerToken());

     //console.log(headers_object);

     //let url1 = URL_SERVICIOS_MONGODB + "/heroes";

     let url = `${URL_SERVICIOS_MONGODB}/heroes`;

     //console.log(url);

     return this.http.get(url).pipe(
       map((data: any) => {
         console.log(data);
         return data;
       })
     );
   }


   buscarFotoHeroes(id : number): any {
    var headers_object = new HttpHeaders().set('x-token', this.leerToken());
        let url = `${URL_SERVICIOS_MONGODB}/multimedias/fotos/${id}`;

        //console.log(url);

        return this.http.get(url).pipe(
          map((data) => {
            console.log(data);
            return data;
          })
        );
      }

   public leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

}
