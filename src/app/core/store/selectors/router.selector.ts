import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

import { AppState } from '../reducers';

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState
>('router');

export const selectRouterParams = createSelector(
  selectRouterState,
  (state: RouterReducerState) => state && state.state && state.state.root.params
);

export const selectRouterUrl = createSelector(
  selectRouterState,
  (state: RouterReducerState) => state && state.state && state.state.url
);

export const selectRouterQueryParams = createSelector(
  selectRouterState,
  (state: RouterReducerState) => state && state.state && state.state.root.queryParams
);
