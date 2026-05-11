import { Component } from '@angular/core';
import fairsData from '../../../model/fairs.json';
import { ComarcaList } from '../../elements/comarca-list/comarca-list';
import { FairList } from '../../elements/fair-list/fair-list';
import { Fair, getFairComarca } from '../../../model/fairs';

@Component({
  selector: 'app-selector-fires',
  imports: [ComarcaList, FairList],
  templateUrl: './selector-fires.html',
  styleUrl: './selector-fires.css',
})
export class SelectorFiresPage {
  readonly fairs: Fair[] = (fairsData as unknown as Fair[]) ?? [];
  readonly comarques: string[] = this.buildComarques();
  selectedComarca = '';

  onComarcaSelected(comarca: string): void {
    this.selectedComarca = comarca;
  }

  get filteredFairs(): Fair[] {
    if (!this.selectedComarca) {
      return this.fairs;
    }

    return this.fairs.filter((fair) => getFairComarca(fair) === this.selectedComarca);
  }

  private buildComarques(): string[] {
    const comarques = this.fairs
      .map((fair) => getFairComarca(fair))
      .filter((value) => value.length > 0);

    return [...new Set(comarques)].sort((a, b) => a.localeCompare(b, 'ca'));
  }
}
