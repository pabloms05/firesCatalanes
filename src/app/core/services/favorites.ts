import { Injectable } from '@angular/core';
import { Fair, getFairId } from '../../model/fairs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private readonly storageKey = 'fires-favorites';

  getAll(): Fair[] {
    const data = this.readStorage();
    return data;
  }

  isFavorite(fair: Fair): boolean {
    const id = getFairId(fair);
    return this.getAll().some((item) => getFairId(item) === id);
  }

  add(fair: Fair): void {
    if (this.isFavorite(fair)) {
      return;
    }
    const updated = [...this.getAll(), fair];
    this.writeStorage(updated);
  }

  remove(fair: Fair): void {
    const id = getFairId(fair);
    const updated = this.getAll().filter((item) => getFairId(item) !== id);
    this.writeStorage(updated);
  }

  toggle(fair: Fair): void {
    if (this.isFavorite(fair)) {
      this.remove(fair);
      return;
    }
    this.add(fair);
  }

  private readStorage(): Fair[] {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) {
        return [];
      }
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private writeStorage(fairs: Fair[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(fairs));
  }
}
