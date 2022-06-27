import { getTrends, TrendFeed } from '../../../../shared/models/feeds.model';
import { createAction, props } from '@ngrx/store';

export const loadFeeds = createAction('[Feeds] Load Feeds');

export const loadFeedsSuccess = createAction(
  '[Feeds] Load feeds success',
  props<{ feeds: TrendFeed[] }>()
);
