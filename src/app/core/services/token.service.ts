import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root',
})
export class TokenService {
    private readonly route = inject(Router);
    private readonly cookieService = inject(CookieService);

    get getToken(): string {
        return this.getSession();
    }

    public setSession(token: string): void {
        this.cookieService.set('auth_token', token);
    }

    private getSession(): string {
        return this.cookieService.get('auth_token');
    }

    public signOut(): void {
        this.removeAuth();
        this.route.navigate(['/login']);
    }

    private removeAuth(): void {
        this.cookieService.delete('auth_token');
    }

    public isAuthenticated() : boolean {
        const token = this.getSession();

        if(token){
            return true;
        }

        return false
    }
}
