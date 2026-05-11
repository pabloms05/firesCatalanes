import { Component } from '@angular/core';
import { FavoritesService } from '../../../core/services/favorites';
import {
  Fair,
  getFairComarca,
  getFairDateRange,
  getFairMunicipality,
  getFairName
} from '../../../model/fairs';

@Component({
  selector: 'app-favorites-list',
  imports: [],
  templateUrl: './favorites-list.html',
  styleUrl: './favorites-list.css',
})
export class FavoritesList {
  constructor(private readonly favoritesService: FavoritesService) {}

  favorites(): Fair[] {
    return this.favoritesService.getAll();
  }

  fairName(fair: Fair): string {
    return getFairName(fair);
  }

  fairMunicipality(fair: Fair): string {
    return getFairMunicipality(fair);
  }

  fairComarca(fair: Fair): string {
    return getFairComarca(fair);
  }

  fairDateRange(fair: Fair): string {
    return getFairDateRange(fair);
  }

  remove(fair: Fair): void {
    this.favoritesService.remove(fair);
  }

}
