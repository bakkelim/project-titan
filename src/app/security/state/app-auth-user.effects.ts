import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AppAuthUserActions, AppAuthUserActionTypes, LoginAppAuthUser, LoginAppAuthUserSuccess, LoginAppAuthUserError } from './app-auth-user.actions';
import { of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { SecurityService } from '../services/security.service';
import { Router } from '@angular/router';

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

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$
    .ofType(AppAuthUserActionTypes.LoginAppAuthUserSuccess)
    .pipe(
      tap(() => this.router.navigate(['/']))
    );

  @Effect({ dispatch: false })
  logout$ = this.actions$
    .ofType(AppAuthUserActionTypes.LogoutAppAuthUser)
    .pipe(
      tap(() => this.router.navigate(['/login']))
    );

  constructor(
    private actions$: Actions,
    private secruityService: SecurityService,
    private router: Router,
  ) { }
}
