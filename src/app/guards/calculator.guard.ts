import { CanActivateFn } from '@angular/router';

export const calculatorGuard: CanActivateFn = (route, state) => {
  return true;
};
