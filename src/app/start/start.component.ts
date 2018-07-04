import { Component, OnInit } from '@angular/core';
import { AppAuthUser } from '../security/state/app-user-auth';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';

@Component({
  selector: 'titan-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  appAuthUser: AppAuthUser;
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.select(fromRoot.getAppAuthUser).subscribe(authUser => this.appAuthUser = authUser);
  }


}
