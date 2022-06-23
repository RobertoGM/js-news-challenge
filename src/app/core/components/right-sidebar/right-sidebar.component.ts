import { TrendFeed } from './../../../portal/feed/models/news.model';
import { TrendsService } from './../../../portal/feed/services/trends.service';
import { ActivatedRoute, Params } from '@angular/router';
import {
  SidebarsService,
  RightSidebarStatus,
} from './../../services/sidebars.service';
import { Component, OnInit } from '@angular/core';
import { getTrendDetails } from 'src/app/portal/feed/models/news.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.sass'],
})
export class RightSidebarComponent implements OnInit {
  rightSidebarStatus: number | undefined;
  enumRightSidebarStatus: typeof RightSidebarStatus = RightSidebarStatus;
  trendId: string | undefined;

  trendForm = new FormGroup({
    url: new FormControl(''),
    provider: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(
    private sidebarService: SidebarsService,
    private trendsService: TrendsService
  ) {}

  ngOnInit(): void {
    this.sidebarService.getSidebarStatus().subscribe((status: number) => {
      this.rightSidebarStatus = status;
      if (this.rightSidebarStatus === this.enumRightSidebarStatus.edit) {
        this.sidebarService.getSelectedNew().subscribe((id: string) => {
          if (id) {
            this.trendId = id;
            this.trendsService
              .loadSingleTrend(id)
              .subscribe((data: getTrendDetails) => {
                this.trendForm.patchValue({
                  url: data.trend.url,
                  provider: data.trend.provider,
                  title: data.trend.title,
                  body: data.trend.body,
                });
              });
          }
        });
      }
    });
  }

  close(): void {
    this.sidebarService.setSidebarStatus(RightSidebarStatus.close);
  }

  save(): void {
    if (this.rightSidebarStatus === RightSidebarStatus.add) {
      this.trendsService
        .saveProviderTrends(this.trendForm.getRawValue())
        .subscribe(() =>
          this.sidebarService.setSidebarStatus(RightSidebarStatus.close)
        );
    } else if (
      this.rightSidebarStatus === RightSidebarStatus.edit &&
      this.trendId
    ) {
      this.trendsService
        .editProviderTrends(this.trendForm.getRawValue(), this.trendId)
        .subscribe(() =>
          this.sidebarService.setSidebarStatus(RightSidebarStatus.close)
        );
    }
  }
}
