import { getTrends, TrendFeed } from './../../../feed/models/news.model';
import { createAction, props } from '@ngrx/store';

export const loadFeeds = createAction('[Feeds] Load Feeds');

export const loadFeedsSuccess = createAction(
  '[Feeds] Load feeds success',
  props<{ feeds: TrendFeed[] }>()
);
