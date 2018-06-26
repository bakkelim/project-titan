import { TestBed, inject } from '@angular/core/testing';

import { SecurityService } from './security.service';

describe('SecurityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityService]
    });
  });

  it('should be created', inject([SecurityService], (service: SecurityService) => {
    expect(service).toBeTruthy();
  }));


  // it('should return AuthUser object when login is called with correct username and password',
  //     inject([SecurityService], (service: SecurityService) => {
  //     const result = service.login('marius', 'password');
  //   expect(result).
  // }));
});
