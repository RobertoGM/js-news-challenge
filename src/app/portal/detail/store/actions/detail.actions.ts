import { TrendFeed } from '../../../../shared/models/feeds.model';
import { createAction, props } from '@ngrx/store';

export const loadDetail = createAction(
  '[Details] Load details',
  props<{ id: string }>()
);

export const loadDetailSuccess = createAction(
  '[Details] Load details success',
  props<{ detail: TrendFeed }>()
);

export const exitDetail = createAction('[Details] Exit details');
