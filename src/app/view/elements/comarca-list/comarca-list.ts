import { Component } from '@angular/core';
import { input, output } from '@angular/core';

@Component({
  selector: 'app-comarca-list',
  imports: [],
  templateUrl: './comarca-list.html',
  styleUrl: './comarca-list.css',
})
export class ComarcaList {
  readonly comarques = input<string[]>([]);
  readonly selectedComarca = input<string>('');
  readonly comarcaSelected = output<string>();

  onSelect(comarca: string): void {
    this.comarcaSelected.emit(comarca);
  }
}
