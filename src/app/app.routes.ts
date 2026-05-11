import { Routes } from '@angular/router';
import { FavoritesPage } from './view/pages/favorites/favorites';
import { Home } from './view/pages/home/home';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'favorites', component: FavoritesPage },
	{ path: '**', redirectTo: '' }
];
