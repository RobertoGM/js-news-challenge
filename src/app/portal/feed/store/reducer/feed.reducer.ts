import { TrendFeed } from '../../../feed/models/news.model';
import { createReducer, on } from '@ngrx/store';
import * as FeedActions from '../actions/feed.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface FeedListState extends EntityState<TrendFeed> {}

export interface FeedState {
  loading: boolean;
  feeds: FeedListState;
}

export const feedAdapter: EntityAdapter<TrendFeed> =
  createEntityAdapter<TrendFeed>({
    selectId: (feed: TrendFeed) => feed._id 
  });

export const initialState: FeedState = {
  loading: false,
  feeds: feedAdapter.getInitialState(),
};

export const feedReducer = createReducer(
  initialState,
  on(FeedActions.loadFeeds, (state) => ({
    ...state,
    loading: true,
  })),
  on(FeedActions.loadFeedsSuccess, (state, { feeds }) => ({
    ...state,
    feeds: feedAdapter.addMany(feeds, state.feeds),
    loading: false,
  }))
);
