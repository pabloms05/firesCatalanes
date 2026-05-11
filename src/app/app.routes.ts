import { Routes } from '@angular/router';
import { FavoritesPage } from './view/pages/favorites/favorites';
import { SelectorFiresPage } from './view/pages/selector-fires/selector-fires';
import { Home } from './view/pages/home/home';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'selector-fires', component: SelectorFiresPage },
	{ path: 'favorites', component: FavoritesPage },
	{ path: '**', redirectTo: '' }
];
