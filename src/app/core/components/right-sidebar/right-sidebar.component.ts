import { TrendFeed } from './../../../portal/feed/models/news.model';
import { TrendsService } from './../../../portal/feed/services/trends.service';
import { ActivatedRoute, Params } from '@angular/router';
import {
  SidebarsService,
  RightSidebarStatus,
} from './../../services/sidebars.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getTrendDetails } from 'src/app/portal/feed/models/news.model';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.sass'],
})
export class RightSidebarComponent implements OnInit {
  rightSidebarStatus: number | undefined;
  enumRightSidebarStatus: typeof RightSidebarStatus = RightSidebarStatus;
  trend: TrendFeed | undefined;

  constructor(
    private sidebarService: SidebarsService,
    private route: ActivatedRoute,
    private trendsService: TrendsService
  ) {}

  ngOnInit(): void {
    this.sidebarService
      .getSidebarStatus()
      .subscribe((status: number) => (this.rightSidebarStatus = status));

    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.trendsService
          .loadSingleTrend(params['id'])
          .subscribe((data: getTrendDetails) => {
            this.trend = data.trend;
          });
      }
    });
  }

  close(): void {
    this.sidebarService.setSidebarStatus(RightSidebarStatus.close);
  }

  save(): void {
    //call to save service

    this.sidebarService.setSidebarStatus(RightSidebarStatus.close);
  }
}
