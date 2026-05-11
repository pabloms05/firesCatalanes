import { Component } from '@angular/core';
import { FavoritesList } from '../../elements/favorites-list/favorites-list';

@Component({
  selector: 'app-favorites',
  imports: [FavoritesList],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class FavoritesPage {
  protected readonly favoritesListRef = FavoritesList;
}
