import { newTrend, TrendFeed } from '../../../feed/models/news.model';
import { createReducer, on } from '@ngrx/store';
import * as DetailActions from '../actions/detail.actions';

export interface DetailState {
  loading: boolean;
  detailFeed: TrendFeed | undefined;
}

export const initialState: DetailState = {
  loading: false,
  detailFeed: undefined,
};

export const detailReducer = createReducer(
  initialState,
  on(DetailActions.loadDetail, (state) => ({
    ...state,
    loading: true,
  })),
  on(DetailActions.loadDetailSuccess, (state, { detail }) => ({
    ...state,
    detailFeed: detail,
    loading: false,
  })),
  on(DetailActions.exitDetail, (state) => ({
    ...state,
    detailFeed: undefined,
    loading: false,
  }))
);
