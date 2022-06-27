import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { TrendsService } from '../../../feed/services/trends.service';
import * as FeedActions from '../actions/feed.actions';
import * as SidebarActions from '../../../../core/store/actions/sidebar.actions';

@Injectable()
export class FeedEffects {
  loadFeeds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeedActions.loadFeeds),
      switchMap(() =>
        this.trendsService
          .loadProviderTrends()
          .pipe(
            map((feeds) =>
              FeedActions.loadFeedsSuccess({ feeds: feeds.trends })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private trendsService: TrendsService
  ) {}
}
