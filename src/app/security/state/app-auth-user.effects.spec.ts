import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AppAuthUserEffects } from './app-auth-user.effects';

describe('AppAuthUserService', () => {
  let actions$: Observable<any>;
  let effects: AppAuthUserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppAuthUserEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(AppAuthUserEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
