import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { routerReducer} from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import * as fromStatus from './status/status.reducer';
import * as fromLaunch from './launch/launch.reducer';
import * as fromInfo from './info/info.reducer';


export interface State {
  router: any,
  status: fromStatus.State;
  launch: fromLaunch.State;
  info: fromInfo.State;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  status: fromStatus.reducer,
  launch: fromLaunch.reducer,
  info: fromInfo.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
