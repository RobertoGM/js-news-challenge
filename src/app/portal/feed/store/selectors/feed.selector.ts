import { Trends } from '../../../../shared/models/feeds.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectSelectedProvider } from 'src/app/core/store/selectors/sidebar.selectors';
import { TrendFeed } from '../../../../shared/models/feeds.model';
import { feedAdapter, FeedState } from './../reducer/feed.reducer';

export const selectFeedState = createFeatureSelector<any>('feed');

export const selectFeeds = createSelector(
  selectFeedState,
  (state: FeedState) => state.feeds
);

export const { selectAll: selectAllFeeds, selectTotal: selectTotalFeeds } =
  feedAdapter.getSelectors(selectFeeds);

export const selectAllTrends = createSelector(
  selectAllFeeds,
  selectSelectedProvider,
  (feeds, provider: number | undefined) =>
    provider !== undefined
      ? feeds.filter((t: TrendFeed) => t.provider === Trends[provider])
      : feeds
);

export const selectMainTrend = createSelector(
  selectAllTrends,
  (feeds) => feeds[0]
);

export const selectSecondaryTrend = createSelector(selectAllTrends, (feeds) =>
  feeds.slice(1, 3)
);

export const selectOtherTrend = createSelector(selectAllTrends, (feeds) =>
  feeds.slice(3)
);
