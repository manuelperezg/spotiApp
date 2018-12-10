import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'search', component: SearchComponent },
	//si pongo una ruta vacía  redirecciona a home
	{ path: '', pathMatch:'full',redirectTo: 'home'},
	//si pongo cualquier otra ruta redirecciona a home
	{ path: '**', pathMatch:'full',redirectTo: 'home'}
	];