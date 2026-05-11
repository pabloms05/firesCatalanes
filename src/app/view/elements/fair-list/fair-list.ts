import { Component } from '@angular/core';
import { input } from '@angular/core';
import { FavoritesService } from '../../../core/services/favorites';
import {
  Fair,
  getFairComarca,
  getFairDateRange,
  getFairMunicipality,
  getFairName
} from '../../../model/fairs';

@Component({
  selector: 'app-fair-list',
  imports: [],
  templateUrl: './fair-list.html',
  styleUrl: './fair-list.css',
})
export class FairList {
  readonly fairs = input<Fair[]>([]);

  constructor(private readonly favoritesService: FavoritesService) {}

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

  isFavorite(fair: Fair): boolean {
    return this.favoritesService.isFavorite(fair);
  }

  toggleFavorite(fair: Fair): void {
    this.favoritesService.toggle(fair);
  }

}
