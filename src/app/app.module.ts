import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//modulos de rutas
import { RouterModule } from '@angular/router';

//importar modulo que permite realizar peticiones http
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
//importar nuestras rutas
import { ROUTES } from './app.routes';
//PIPES
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    DomseguroPipe,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //useHash para poner el # en la ruta
    RouterModule.forRoot( ROUTES, {useHash:true}), //importando rutas 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
