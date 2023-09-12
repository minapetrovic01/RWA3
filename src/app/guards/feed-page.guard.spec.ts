import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { feedPageGuard } from './feed-page.guard';

describe('feedPageGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => feedPageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
