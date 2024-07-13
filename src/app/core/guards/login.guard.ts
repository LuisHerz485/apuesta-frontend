import { Injectable, inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable({
    providedIn: 'root',
})
export class LoginGuard implements CanActivate {
    private tokenService = inject(TokenService);
    private router = inject(Router);

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): boolean {
        if (this.tokenService.isAuthenticated()) {
            this.router.navigate(['/']);
            return false;
        } else {
            return true;
        }
    }
}
