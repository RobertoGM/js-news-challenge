import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DetailState } from '../reducers/detail.reducer';

export const selectDetailState = createFeatureSelector<any>('detail');

export const selectDetailLoading = createSelector(
  selectDetailState,
  (state: DetailState) => state.loading
);

export const selectDetailFeed = createSelector(
  selectDetailState,
  (state: DetailState) => state.detailFeed
);
