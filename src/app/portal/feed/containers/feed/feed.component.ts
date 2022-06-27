import { setSelectedProvider } from './../../../../core/store/actions/sidebar.actions';
import { getTrends, TrendFeed } from '../../../../shared/models/feeds.model';
import { Component, OnInit } from '@angular/core';
import { TrendsService } from '../../services/trends.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setRightSidebarStatus } from 'src/app/core/store/actions/sidebar.actions';
import { RightSidebarStatus } from 'src/app/core/models/sidebar.model';
import { loadFeeds } from '../../store/actions/feed.actions';
import {
  selectMainTrend,
  selectOtherTrend,
  selectSecondaryTrend,
} from '../../store/selectors/feed.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
})
export class FeedComponent implements OnInit {

  mainTrend$: Observable<TrendFeed | undefined> =
    this.store.select(selectMainTrend);

  secondaryTrend$: Observable<TrendFeed[] | undefined> =
    this.store.select(selectSecondaryTrend);

  otherTrend$: Observable<TrendFeed[] | undefined> =
    this.store.select(selectOtherTrend);

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadFeeds());
  }

  goToDetails(newsId: string): void {
    this.store.dispatch(setSelectedProvider({ provider: undefined }));
    this.router.navigate([`/details/${newsId}`]);
  }

  openSidebar(): void {
    this.store.dispatch(
      setRightSidebarStatus({ status: RightSidebarStatus.add })
    );
  }
}
