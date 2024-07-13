import {
    HttpErrorResponse,
    HttpHandlerFn,
    HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';
import { environment } from '@/environments/environment';
import { catchError, throwError } from 'rxjs';
import { ToastService } from '../services/toast.service';

export function AuthInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn,
) {
    const tokenService = inject(TokenService);
    const toastService = inject(ToastService);
    const url = `${environment.apis.mainApi}${req.url}`;

    const token = tokenService.getToken;

    const request = req.clone({
        url: url,
        setHeaders: {
            authorization: token ? `Bearer ${token}` : '',
        },
    });

    return next(request).pipe(
        catchError((response: HttpErrorResponse) => {
            toastService.showError('Error', response.error.message);
            return throwError(() => response);
        }),
    );
}
