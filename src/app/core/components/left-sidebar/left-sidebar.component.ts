import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsProvider, Trends } from 'src/app/portal/feed/models/news.model';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.sass'],
})
export class LeftSidebarComponent {
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

  amountOfNews: number = 132;

  // TODO: Active provider should not be handled here this way. 
  // The state should change based on the router status. Currently the "active" state is buggy and indicates wrong based on certain navigations.
  activeProvider: number | undefined;

  constructor(private router: Router) {}

  setActiveProvider(providerId: number): void {
    if (this.activeProvider === providerId) {
      this.activeProvider = undefined;
      this.router.navigate([`news`]);
    } else {
      this.activeProvider = providerId;
      this.router.navigate([`news/${Trends[this.activeProvider]}`]);
    }
  }
}
