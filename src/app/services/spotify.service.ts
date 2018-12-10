import { Injectable } from '@angular/core';
//importar peticiones http
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  //con esto ya no es necesario declararlo en app.module
  //porque angular ya lo detecta
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { 
  	console.log('Spotify service listo')}

  	getNewRealse(){

  		const headers = new HttpHeaders({
			'Authorization': "Bearer BQB4VYWut8tPLlqMwsOouWHPCbYELoRSgvSdKvkyYGKe3QV4Cr8e-ifh7hmH2guOwp1ioOZzfRHbKZDjLhw",

  		});
  		this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).
  			subscribe( datos => {
  				console.log(datos);
  			})
  	}


}
