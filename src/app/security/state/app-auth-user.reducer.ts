import { Action } from '@ngrx/store';
import { AppAuthUserActions, AppAuthUserActionTypes } from './app-auth-user.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { AppAuthUser } from '../state/app-user-auth';

export interface State {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  data: AppAuthUser | null;
}

export const initialState: State = {
  isLoading: false,
  error: null,
  data: {
    userName: '',
    isAuthenticated: false,
    bearerToken: '',
  },
};

export function reducer(state = initialState, action: AppAuthUserActions): State {
  switch (action.type) {

    case AppAuthUserActionTypes.LoginAppAuthUser:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case AppAuthUserActionTypes.LoginAppAuthUserSuccess:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case AppAuthUserActionTypes.LoginAppAuthUserError:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case AppAuthUserActionTypes.LoginAppAuthUserFailed:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case AppAuthUserActionTypes.LogoutAppAuthUser:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
