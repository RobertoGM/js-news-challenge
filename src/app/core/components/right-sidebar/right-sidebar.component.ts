import { setRightSidebarStatus } from './../../store/actions/sidebar.actions';
import { Store } from '@ngrx/store';
import { newTrend, TrendFeed } from './../../../portal/feed/models/news.model';
import { TrendsService } from './../../../portal/feed/services/trends.service';

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { getTrendDetails } from 'src/app/portal/feed/models/news.model';
import { FormGroup, FormControl } from '@angular/forms';
import { RightSidebarStatus } from '../../models/sidebar.model';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.sass'],
})
export class RightSidebarComponent implements OnInit {
  @Input('status') status: number | null = 0;
  @Input('selectedNews') selectedNews: TrendFeed | null | undefined;
  @Output('onClose') onClose: EventEmitter<void> = new EventEmitter();
  @Output('onAdd') onSave: EventEmitter<newTrend> = new EventEmitter();
  @Output('onEdit') onEdit: EventEmitter<{
    trend: TrendFeed;
    id: string;
  }> = new EventEmitter();

  enumRightSidebarStatus: typeof RightSidebarStatus = RightSidebarStatus;

  trendForm = new FormGroup({
    url: new FormControl(''),
    provider: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  });

  constructor( private store: Store) {}

  ngOnInit(): void {
    if (this.selectedNews) {
      this.trendForm.patchValue({
        url: this.selectedNews.url,
        provider: this.selectedNews.provider,
        title: this.selectedNews.title,
        body: this.selectedNews.body,
      });
    }
  }

  close(): void {
    this.onClose.emit();
  }

  save(): void {
    if (this.status === RightSidebarStatus.add) {
      this.onSave.emit(this.trendForm.getRawValue() as newTrend);
    } else if (
      this.status === RightSidebarStatus.edit &&
      this.selectedNews?._id
    ) {
      this.onEdit.emit({
        trend: this.trendForm.getRawValue() as TrendFeed,
        id: this.selectedNews?._id,
      });
    }
  }
}
