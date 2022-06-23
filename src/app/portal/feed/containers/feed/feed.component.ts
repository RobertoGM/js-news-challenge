import { getTrends, TrendFeed } from './../../models/news.model';
import { Component, OnInit } from '@angular/core';
import { TrendsService } from '../../services/trends.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  RightSidebarStatus,
  SidebarsService,
} from 'src/app/core/services/sidebars.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
})
export class FeedComponent implements OnInit {
  trends: TrendFeed[] = [];
  secondaryFeeds: TrendFeed[] = [];
  mainTrend: TrendFeed | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private trendsService: TrendsService,
    private sidebarService: SidebarsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.trendsService.loadProviderTrends().subscribe((data: getTrends) => {
        this.trends = params['trend']
          ? data.trends.filter((t: TrendFeed) => t.provider === params['trend'])
          : data.trends;

        this.mainTrend = this.trends.shift();
        this.secondaryFeeds = this.trends.slice(0, 2);
        this.trends.splice(0, 2);
      });
    });
  }

  goToDetails(newsId: string): void {
    this.router.navigate([`/details/${newsId}`]);
  }

  openSidebar(): void {
    this.sidebarService.setSidebarStatus(RightSidebarStatus.add);
  }
}
