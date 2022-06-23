import { TrendsService } from './../../../feed/services/trends.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  getTrendDetails,
  TrendFeed,
} from 'src/app/portal/feed/models/news.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
})
export class DetailComponent implements OnInit {
  trend: TrendFeed | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private trendsService: TrendsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.trendsService
        .loadSingleTrend(params['id'])
        .subscribe((data: getTrendDetails) => {
          this.trend = data.trend;
        });
    });
  }

  goBack(): void {
    this.router.navigate(['/news']);
  }
}
