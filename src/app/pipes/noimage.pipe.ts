import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

	transform( images: any[] ): string {
		let res:string="assets/img/noimage.jpg";
		//Si no hay imagenes retorna el noimagen
		if ( !images ) {
			return res;
		}
		//Si hay imagenes retorna la pos 0
		if(images.length>0) {
			return images[0].url
		}else{
			//si hay array pero no imagenes retorna le no imagen
			return res;

		};
	}

}
