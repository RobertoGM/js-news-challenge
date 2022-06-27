import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TrendFeed } from '../../../../shared/models/feeds.model';

@Component({
  selector: 'app-normal-feed',
  templateUrl: './normal-feed.component.html',
  styleUrls: ['./normal-feed.component.sass'],
})
export class NormalFeedComponent {
  @Input('feed') feed: TrendFeed | undefined;
  @Input('isSecondary') isSecondary: boolean = false;
  @Output() onFeedClicked = new EventEmitter<string>();

  constructor() {}

  feedClicked(): void {
    this.onFeedClicked.emit(this.feed?._id);
  }
}
