import { Component } from '@angular/core';
import fairsData from '../../../model/fairs.json';
import { ComarcaList } from '../../elements/comarca-list/comarca-list';
import { FairList } from '../../elements/fair-list/fair-list';
import { Fair, getFairComarca } from '../../../model/fairs';

@Component({
  selector: 'app-home',
  imports: [ComarcaList, FairList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly fairs: Fair[] = (fairsData as Fair[]) ?? [];
  readonly comarques: string[] = this.buildComarques();
  selectedComarca = this.comarques[0] ?? '';

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
