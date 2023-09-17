import { createAction, props } from "@ngrx/store";
import { Decision } from "../entities/decision";


export const loadMyDecisions = createAction(
    '[Decisions] Load My Decisions'
);

export const loadMyDecisionsSuccess = createAction(
    '[Decisions] Load My Decisions Success',
    props<{ myDecisions: Decision[] }>()
);

export const loadSearchedDecisions = createAction(
    '[Decisions] Load Searched Decisions',
    props<{ search: string }>()
);

export const loadSearchedDecisionsSuccess = createAction(
    '[Decisions] Load Searched Decisions Success',
    props<{ searchedDecisions: Decision[] }>()
);

