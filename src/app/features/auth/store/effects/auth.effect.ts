import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthActions from '../actions/auth.action';
import { AuthService } from '@/app/core/services/auth.service';

@Injectable()
export class AuthEffects {

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            mergeMap(({ userName, password }) => {
                return this.authService.loginSend({ userName, password }).pipe(
                    map(response =>
                        AuthActions.loginSuccess({
                            user: response.data.userName,
                        }),
                    ),
                    catchError(error =>
                        of(AuthActions.loginFailure({ error })),
                    ),
                );
            }),
        ),
    );

    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.register),
            mergeMap(({ userName, password }) =>
                this.authService.registerSend({ userName, password }).pipe(
                    map(user => AuthActions.registerSuccess({ user })),
                    catchError(error =>
                        of(AuthActions.registerFailure({ error })),
                    ),
                ),
            ),
        ),
    );

    constructor(private actions$: Actions, private authService: AuthService) {}

}
