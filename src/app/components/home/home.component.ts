import { Component, OnInit } from '@angular/core';
//poder hacer peticiones http
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

	//paises:any[] = [];
  nuevasCanciones: any[] = [];
  loading:boolean;

  constructor( private http:HttpClient,
              private spotify:SpotifyService) {


  	/*console.log('Constructor paises hecho');
  	//peticion get
  	this.http.get('https://restcountries.eu/rest/v2/lang/es')
  		.subscribe( (resp:any) => {
  			this.paises = resp;
  			console.log(resp);
  		} )*/

      this.loading = true;
      this.spotify.getNewRealse().subscribe ( (datos:any) => {
        // console.log(datos.albums.items);
        this.nuevasCanciones = datos;
        this.loading = false;
      })
   }

  ngOnInit() {
  }

}
