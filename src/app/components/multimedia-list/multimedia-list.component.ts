import { Component } from '@angular/core';
import { MongoDBService } from '../../services/mongo-db.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-multimedia-list',
  templateUrl: './multimedia-list.component.html',
  styleUrls: ['./multimedia-list.component.css']
})
export class MultimediaListComponent {
  visualizacion:string = 'grid';
  cargando:boolean = false;

  multimedias: Multimedia[] = [];
}
