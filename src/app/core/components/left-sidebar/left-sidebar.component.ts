import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NewsProvider } from 'src/app/shared/models/feeds.model';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.sass'],
})
export class LeftSidebarComponent {
  @Input('selectedProvider') selectedProvider: number | undefined | null;
  @Input('amountOfNews') amountOfNews: number | null | undefined;
  @Output('onProviderSelect') onProviderSelect: EventEmitter<
  number | undefined
  > = new EventEmitter();
  
  providers: NewsProvider[] = [
    {
      id: 0,
      src_big: '/assets/Logos/El_Mundo.svg',
      src_small: '/assets/Iconos/Favicon/favicon_el_mundo.svg',
      alt_text: 'Logo de El Mundo',
    },
    {
      id: 1,
      src_big: '/assets/Logos/El_Pais.svg',
      src_small: '/assets/Iconos/Favicon/favicon_el_pais.svg',
      alt_text: 'Logo de El Pais',
    },
  ];

  constructor() {}

  setActiveProvider(providerId?: number): void {
    this.onProviderSelect.emit(providerId);
  }
}
