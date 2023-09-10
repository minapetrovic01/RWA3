import { createAction, props } from "@ngrx/store";


export enum RouterActionTypes {
    Go = "GO",
    Back = "BACK",
}

export const routerGo = createAction(
    RouterActionTypes.Go,
    props<{
         path: string[];
         }>()
);
