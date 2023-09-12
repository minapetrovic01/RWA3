import { CanActivateFn } from '@angular/router';

export const myDecisionsGuard: CanActivateFn = (route, state) => {
  return true;
};
