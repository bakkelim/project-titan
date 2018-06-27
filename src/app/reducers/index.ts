import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAppAuthUser from '../security/state/app-auth-user.reducer';

export interface State {

  appAuthUser: fromAppAuthUser.State;
}

export const reducers: ActionReducerMap<State> = {

  appAuthUser: fromAppAuthUser.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getAppAuthUserState = createFeatureSelector<fromAppAuthUser.State>('appAuthUser');
export const getAppAuthUser = createSelector(getAppAuthUserState, state => state.data);
export const getAppAuthUserIsLoading = createSelector(getAppAuthUserState, state => state.isLoading);
