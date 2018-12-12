import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styles: []
})
export class SearchComponent {
	artistas: any[] = [];
	loading:boolean;

	constructor(	private spotify:SpotifyService) { 
	}
	
	buscarArtista(termino:string){
		//obtenemos los artistas por el termino pasado del dom
		this.loading = true;
		this.spotify.getArtista(termino)
		.subscribe( (data: any)=> {
			
			this.artistas = data; 
			this.loading = false;

		});
	}

}
