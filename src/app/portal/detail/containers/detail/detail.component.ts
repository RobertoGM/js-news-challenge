import {
  SidebarsService,
  RightSidebarStatus,
} from './../../../../core/services/sidebars.service';
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

  rightSidebarStatus: typeof RightSidebarStatus = RightSidebarStatus;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private trendsService: TrendsService,
    private sidebarService: SidebarsService
  ) {}

  ngOnInit(): void {
    this.sidebarService.setSelectedProvider(undefined);
    this.route.params.subscribe((params: Params) => {
      this.trendsService
        .loadSingleTrend(params['id'])
        .subscribe((data: getTrendDetails) => {
          this.trend = data.trend;
          this.sidebarService.setSelectedNew(params['id']);
        });
    });
  }

  goBack(): void {
    this.router.navigate(['/news']);
  }

  removeNew(): void {
    if (this.trend) {
      this.trendsService
        .removeTrend(this.trend._id)
        .subscribe(() => this.goBack());
    }
  }

  openSidebar(status: number): void {
    this.sidebarService.setSidebarStatus(status);
  }
}
