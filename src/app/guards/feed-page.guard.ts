import { CanActivateFn } from '@angular/router';

export const feedPageGuard: CanActivateFn = (route, state) => {
  return true;
};
