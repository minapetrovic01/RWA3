import { createReducer, on } from "@ngrx/store";
import { User } from "../entities/user";
import { removeToken, setToken, setUser } from "./user.actions";

export interface AuthState {
    token: string;
    user: User|null;
  }
  
  export const initialState: AuthState = {
    token: "",
    user: null,
  };

  export const authReducer = createReducer(
    initialState,
    on(setToken, (state, { token }): AuthState => ({ ...state, token })),
    on(removeToken, (state): AuthState => ({ ...state, token: "" })),
    on(setUser, (state, { user }): AuthState => ({ ...state, user }))
  );