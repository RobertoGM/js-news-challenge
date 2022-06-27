import { TrendFeed } from '../../../../shared/models/feeds.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.sass'],
})
export class MainFeedComponent {
  @Input('feed') feed: TrendFeed | null | undefined;
  @Output() onFeedClicked = new EventEmitter<string>();

  constructor() {}

  feedClicked(): void {
    this.onFeedClicked.emit(this.feed?._id);
  }
}
