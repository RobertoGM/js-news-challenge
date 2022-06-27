import { Router } from '@angular/router';
import {
  newTrend,
  TrendFeed,
  Trends,
} from '../../../shared/models/feeds.model';
import { TrendsService } from './../../../portal/feed/services/trends.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectDetailFeed } from 'src/app/portal/detail/store/selectors/detail.selectors';
import { selectTotalFeeds } from 'src/app/portal/feed/store/selectors/feed.selector';
import { RightSidebarStatus } from '../../models/sidebar.model';
import {
  setRightSidebarStatus,
  setSelectedProvider,
} from '../../store/actions/sidebar.actions';
import {
  selectRightSidebarStatus,
  selectSelectedProvider,
} from '../../store/selectors/sidebar.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  rightSidebarStatus$: Observable<number> = this.store.select(
    selectRightSidebarStatus
  );

  selectedNews$: Observable<TrendFeed | undefined> =
    this.store.select(selectDetailFeed);

  selectedProvider$: Observable<number | undefined> = this.store.select(
    selectSelectedProvider
  );

  totalFeeds$: Observable<number> = this.store.select(selectTotalFeeds);

  constructor(
    private store: Store,
    private trendsService: TrendsService,
    private router: Router
  ) {}

  closeRightSidebar(): void {
    this.store.dispatch(
      setRightSidebarStatus({ status: RightSidebarStatus.close })
    );
  }

  saveTrend(trend: newTrend): void {
    this.trendsService
      .saveProviderTrends(trend)
      .subscribe(() =>
        this.store.dispatch(
          setRightSidebarStatus({ status: RightSidebarStatus.close })
        )
      );
  }

  editTrend(editedTrend: { trend: newTrend; id: string }): void {
    this.trendsService
      .editProviderTrends(editedTrend)
      .subscribe(() =>
        this.store.dispatch(
          setRightSidebarStatus({ status: RightSidebarStatus.close })
        )
      );
  }

  filterProvider(provider: number | undefined): void {
    this.store.dispatch(setSelectedProvider({ provider }));
    if (provider !== undefined) {
      this.router.navigate([`news/${Trends[provider]}`]);
    } else {
      this.router.navigate([`news`]);
    }
  }
}
