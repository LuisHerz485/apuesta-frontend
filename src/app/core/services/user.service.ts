import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IUserDataCookie } from '../models/interfaces';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private cookieService = inject(CookieService);
    private readonly cookieKey = 'userData';

    public setDataUser(idCustomer : number , userName: string, memberType: string): void {
        const userData: IUserDataCookie = { idCustomer, userName, memberType };
        const userDataString = JSON.stringify(userData);
        this.cookieService.set(this.cookieKey, userDataString);
    }

    public getDataUser(): IUserDataCookie | null {
        const userDataString = this.cookieService.get(this.cookieKey);
        if (userDataString) {
            try {
                return JSON.parse(userDataString);
            } catch (error) {
                console.error('Error al parsear los datos', error);
                return null;
            }
        }
        return null;
    }

    public clearDataUser(): void {
        this.cookieService.delete(this.cookieKey);
    }
}
