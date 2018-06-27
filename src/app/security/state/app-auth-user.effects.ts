import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AppAuthUserActions, AppAuthUserActionTypes, LoginAppAuthUser, LoginAppAuthUserSuccess, LoginAppAuthUserError } from './app-auth-user.actions';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { SecurityService } from '../services/security.service';

@Injectable()
export class AppAuthUserEffects {

  @Effect()
  login$ = this.actions$
    .ofType(AppAuthUserActionTypes.LoginAppAuthUser)
    .pipe(
      map((action: LoginAppAuthUser) => action.payload),
      switchMap((payload) =>
      this.secruityService.login(payload.username, payload.password).pipe(
        map(data => new LoginAppAuthUserSuccess(data)),
        catchError(err => of(new LoginAppAuthUserError(err)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private secruityService: SecurityService,
  ) { }
}
