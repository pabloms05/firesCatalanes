import { Component } from '@angular/core';
import { input } from '@angular/core';
import { FavoritesService } from '../../../core/services/favorites';
import {
  Fair,
  getFairAddress,
  getFairComarca,
  getFairDateRange,
  getFairEmail,
  getFairMunicipality,
  getFairName,
  getFairPhone,
  getFairWeb
} from '../../../model/fairs';

@Component({
  selector: 'app-fair-list',
  imports: [],
  templateUrl: './fair-list.html',
  styleUrl: './fair-list.css',
})
export class FairList {
  readonly fairs = input<Fair[]>([]);
  expandedFairId: string | null = null;

  constructor(private readonly favoritesService: FavoritesService) {}

  trackFair(fair: Fair): string {
    return `${this.fairName(fair)}|${this.fairMunicipality(fair)}`;
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

  fairAddress(fair: Fair): string {
    return getFairAddress(fair);
  }

  fairPhone(fair: Fair): string {
    return getFairPhone(fair);
  }

  fairEmail(fair: Fair): string {
    return getFairEmail(fair);
  }

  fairWeb(fair: Fair): string {
    return getFairWeb(fair);
  }

  toggleDetails(fair: Fair): void {
    const fairId = this.trackFair(fair);
    this.expandedFairId = this.expandedFairId === fairId ? null : fairId;
  }

  isExpanded(fair: Fair): boolean {
    return this.expandedFairId === this.trackFair(fair);
  }

  isFavorite(fair: Fair): boolean {
    return this.favoritesService.isFavorite(fair);
  }

  toggleFavorite(fair: Fair): void {
    this.favoritesService.toggle(fair);
  }

}
