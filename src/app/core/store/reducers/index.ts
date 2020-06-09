import { ActionReducerMap, MetaReducer, Action } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { environment } from 'src/environments/environment';

import { logger } from '../meta-reducers';
import { RouterStateModel } from './router.model';

export interface AppState {
  router: RouterReducerState<RouterStateModel>;
}

export const reducers: ActionReducerMap<AppState, Action> = {
  router: routerReducer,
};

export const metaReducers: Array<MetaReducer<AppState>> = !environment.production
  ? [logger]
  : [];
