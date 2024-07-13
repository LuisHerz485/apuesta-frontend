import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.action';
import { AuthState } from '../../interfaces/auth-state.interface';

export const initialState: AuthState = {
    user: null,
    error: null,
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.loginSuccess, (state, { user }) => ({
        ...state,
        loggedIn: true,
        user,
        error: null
    })),
    on(AuthActions.loginFailure, (state, { error }) => ({
        ...state,
        loggedIn: false,
        user: null,
        error
    })),
    on(AuthActions.registerSuccess, (state, { user }) => ({
        ...state,
        loggedIn: true,
        user,
        error: null
    })),
    on(AuthActions.registerFailure, (state, { error }) => ({
        ...state,
        loggedIn: false,
        user: null,
        error
    }))
);
