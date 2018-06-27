import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { AppAuthUser } from '../../security/state/app-user-auth';
import { LogoutAppAuthUser } from '../../security/state/app-auth-user.actions';

@Component({
  selector: 'titan-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appAuthUser: AppAuthUser;
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.select(fromRoot.getAppAuthUser).subscribe(authUser => this.appAuthUser = authUser);
  }

  logout() {
    this.store.dispatch(new LogoutAppAuthUser());
  }

}
