import { Injectable } from '@angular/core';
//importar peticiones http
import { HttpClient,HttpHeaders } from '@angular/common/http';

//operador map
import { map } from 'rxjs/operators';

@Injectable({
  //con esto ya no es necesario declararlo en app.module
  //porque angular ya lo detecta
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { 
  	console.log('Spotify service listo')}

    //centralizar la información extrida de spotify
    getQuery (query:string){
      const url = `https://api.spotify.com/v1/${ query }`;

      const headers = new HttpHeaders({
        'Authorization': "Bearer BQBSkjxtsaHsDlb1C2IN5QeNMJrzIEcxZ-WJhCVlGtJ3JQJCTLfaMX-GUHqqVM58XOkgrIRnJ5Afltk29P0",

      });

      return this.http.get( url, { headers });
    }

    getNewRealse(){
      // this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      return this.getQuery('browse/new-releases')
      .pipe( map( data => {
        //operador map
        return data['albums'].items;
      } ) )

    }
    getArtista(termino:string){
      // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=10&offset=0`, { headers })
      return this.getQuery(`search?q=${ termino }&type=artist&limit=10&offset=0`)
      .pipe( map( data => data['artists'].items) ); //lo mismo pero más corto
    }


  }
