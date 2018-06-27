import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../../reducers';
import { LoginAppAuthUser } from '../state/app-auth-user.actions';

@Component({
  template: `
  <titan-login
    [isLoading]="isLoading$ | async"
    (loginEvent)="login($event)">
  </titan-login>`,
})
export class LoginPageComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getAppAuthUserIsLoading);
  }

  login(loginObject: { username: string, password: string }) {
    this.store.dispatch(new LoginAppAuthUser({ username: loginObject.username, password: loginObject.password }));
  }
}
