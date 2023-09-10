import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { login, logout } from "./user.actions";
import { map, mergeMap, tap } from "rxjs";
import { Router } from "@angular/router";


@Injectable()
export class UserEffects {

  constructor(private readonly actions$:Actions, private readonly router:Router) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
    //   mergeMap(({ email, password }) => {
    //     return this.authService.login(email, password).pipe(
    //       tap(({ token }) => this.cookieService.set("token", token)),
    //       map(({ token }) => setToken({ token })),
    //       catchError(() => of(loginError({ message: "Login failed" })))
    //     );
       
    //   })
    tap(()=>{console.log('login$');}),

    );
  });

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logout),
        tap(() => {
          this.router.navigateByUrl("/sign-in");
        })
      );
    },
    { dispatch: false }
  );


}