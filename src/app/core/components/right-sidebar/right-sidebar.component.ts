import { newTrend, TrendFeed } from '../../../shared/models/feeds.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
    trend: newTrend;
    id: string;
  }> = new EventEmitter();

  enumRightSidebarStatus: typeof RightSidebarStatus = RightSidebarStatus;

  trendForm = new FormGroup({
    url: new FormControl(''),
    provider: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    if (this.selectedNews && this.status === RightSidebarStatus.edit) {
      this.trendForm.patchValue({
        url: this.selectedNews.url,
        provider: this.selectedNews.provider,
        title: this.selectedNews.title,
        body: this.selectedNews.body,
      });
    } else {
      this.trendForm.reset();
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
        trend: this.trendForm.getRawValue() as newTrend,
        id: this.selectedNews?._id,
      });
    }
  }
}
