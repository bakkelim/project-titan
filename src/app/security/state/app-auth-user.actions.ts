import { Action } from '@ngrx/store';
import { AppAuthUser } from '../state/app-user-auth';
import { HttpErrorResponse } from '@angular/common/http';

export enum AppAuthUserActionTypes {
  LoginAppAuthUser = '[AppAuthUser] Login AppAuthUser',
  LoginAppAuthUserSuccess = '[AppAuthUser] Login AppAuthUser Success',
  LoginAppAuthUserError = '[AppAuthUser] Login AppAuthUser Error',
  LoginAppAuthUserFailed = '[AppAuthUser] Login AppAuthUser Failed',
  LogoutAppAuthUser = '[AppAuthUser] Logout AppAuthUser',
}

export class LoginAppAuthUser implements Action {
  readonly type = AppAuthUserActionTypes.LoginAppAuthUser;

  constructor(public payload: {username: string, password: string}) {}
}

export class LoginAppAuthUserSuccess implements Action {
  readonly type = AppAuthUserActionTypes.LoginAppAuthUserSuccess;

  constructor(public payload: AppAuthUser) {}
}

export class LoginAppAuthUserError implements Action {
  readonly type = AppAuthUserActionTypes.LoginAppAuthUserError;

  constructor(public payload: HttpErrorResponse) {}
}

export class LoginAppAuthUserFailed implements Action {
  readonly type = AppAuthUserActionTypes.LoginAppAuthUserFailed;

  constructor(public payload: HttpErrorResponse) {}
}

export class LogoutAppAuthUser implements Action {
  readonly type = AppAuthUserActionTypes.LogoutAppAuthUser;
}

export type AppAuthUserActions = LoginAppAuthUser | LoginAppAuthUserSuccess | LoginAppAuthUserError | LoginAppAuthUserFailed | LogoutAppAuthUser;
