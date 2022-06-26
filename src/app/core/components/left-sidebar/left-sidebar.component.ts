import { Observable } from 'rxjs';
import { SidebarsService } from './../../services/sidebars.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsProvider, Trends } from 'src/app/portal/feed/models/news.model';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.sass'],
})
export class LeftSidebarComponent implements OnInit {
  activeProvider: number | undefined;

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

  constructor(
    private router: Router,
    private sidebarsService: SidebarsService
  ) {}

  ngOnInit(): void {
    this.sidebarsService
      .getSelectedProvider()
      .subscribe(
        (provider: number | undefined) => (this.activeProvider = provider)
      );
  }

  setActiveProvider(providerId?: number): void {
    this.sidebarsService.setSelectedProvider(providerId);
    if (providerId !== undefined) {
      this.router.navigate([`news/${Trends[providerId]}`]);
    } else {
      this.router.navigate([`news`]);
    }
  }
}
