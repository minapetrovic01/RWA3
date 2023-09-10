import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
import { RouterActionTypes, routerGo } from "./router.actions";
import { map, mergeMap, tap } from "rxjs";
import { Action } from "@ngrx/store";


// @Injectable()
// export class RouterEffects {
//     constructor(private actions$: Actions, private router:Router) {}

//     navigate$=createEffect(()=>this.actions$.pipe(
//         ofType(routerGo.type),
//         map(({path}) =>this.router.navigate(path)),
//     ));
// }