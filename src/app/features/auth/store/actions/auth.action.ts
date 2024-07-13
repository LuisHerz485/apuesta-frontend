import { createAction, props } from '@ngrx/store';

export const login = createAction(
    '[Auth] Login',
    props<{ userName: string; password: string }>(),
);

export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ user: string }>(),
);

export const loginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: any }>(),
);

export const register = createAction(
    '[Auth] Register',
    props<{ userName: string; password: string }>(),
);

export const registerSuccess = createAction(
    '[Auth] Register Success',
    props<{ user: any }>(),
);

export const registerFailure = createAction(
    '[Auth] Register Failure',
    props<{ error: any }>(),
);
