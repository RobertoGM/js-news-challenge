import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { TrendsService } from '../../../feed/services/trends.service';
import * as DetailActions from '../actions/detail.actions';

@Injectable()
export class DetailEffects {
  loadDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DetailActions.loadDetail),
      switchMap((action) =>
        this.trendsService
          .loadSingleTrend(action.id)
          .pipe(
            map((detail) =>
              DetailActions.loadDetailSuccess({ detail: detail.trend })
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
