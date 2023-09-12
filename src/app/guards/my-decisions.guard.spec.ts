import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { myDecisionsGuard } from './my-decisions.guard';

describe('myDecisionsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => myDecisionsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
