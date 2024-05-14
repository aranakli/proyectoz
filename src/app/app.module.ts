import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';


// rutas de los componentes
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeroeEditComponent } from './components/heroe-edit/heroe-edit.component';
import { MultimediaListComponent } from './components/multimedia-list/multimedia-list.component';
import { MultimediaEditComponent } from './components/multimedia-edit/multimedia-edit.component';
import { MultimediaHeroesEditComponent } from './components/multimedia-heroes-edit/multimedia-heroes-edit.component';
import { MultimediaHeroesListComponent } from './components/multimedia-heroes-list/multimedia-heroes-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuscadorComponent,
    HomeComponent,
    HeroesComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    FooterComponent,
    AboutComponent,
    HeroeEditComponent,
    MultimediaListComponent,
    MultimediaEditComponent,
    MultimediaHeroesEditComponent,
    MultimediaHeroesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
