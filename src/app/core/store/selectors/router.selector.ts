import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

import { AppState } from '../reducers';
import { RouterStateModel } from '@app/core/store/reducers/router.model';

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateModel>
>('router');

export const selectRouterParams = createSelector(
  selectRouterState,
  (state: RouterReducerState<RouterStateModel>) => state && state.state && state.state.params
);

export const selectRouterUrl = createSelector(
  selectRouterState,
  (state: RouterReducerState<RouterStateModel>) => state && state.state.url
);

export const selectRouterQueryParams = createSelector(
  selectRouterState,
  (state: RouterReducerState<RouterStateModel>) => state && state.state.queryParams
);
