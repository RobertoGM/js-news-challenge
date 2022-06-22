import { TrendFeed } from './../../models/news.model';
import { Component, OnInit } from '@angular/core';
import { TrendsService } from '../../services/trends.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
})
export class FeedComponent implements OnInit {
  trends: TrendFeed[] = [];

  constructor(
    private route: ActivatedRoute,
    private trendsService: TrendsService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.trendsService.loadProviderTrends().subscribe((data) => {
        console.log(data);
        this.trends = params.trend
          ? data.trends.filter((t: TrendFeed) => t.provider === params.trend)
          : data.trends;
      });
    });
  }
}
