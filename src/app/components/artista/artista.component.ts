import { Component, OnInit } from '@angular/core';
//para recibir los parametros por get
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  artista: any = {};
	topTracks: any[] = [];
	loading:boolean;

 constructor ( private router:ActivatedRoute,
  			   private spotify:SpotifyService) {

  	this.router.params.subscribe( params =>{
  		//llamar el artista
      this.getArtista(params['id ']);
  		this.getTopTracks(params['id ']);
  		this.loading = true;

  	})

  	
  }
  //funcion que llama al artista
  getArtista( id:string ){
  	this.spotify.getInfoArtista(id).subscribe ( (datos:any) => {
  	  this.artista = datos;
  	  this.loading = false;
  	  // console.log(datos);
  	})
  }

  getTopTracks( id:string ){
    this.spotify.getTopTracks(id).subscribe ( (datos:any) => {
      this.topTracks = datos;
      
      this.loading = false;
      console.log(this.topTracks);
    })
  }

 

}
