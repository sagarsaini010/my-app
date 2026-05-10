import { TestBed } from '@angular/core/testing';

import { LoginDervice } from './login-dervice';

describe('LoginDervice', () => {
  let service: LoginDervice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginDervice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
