import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ENDPOINT_CUSTOMER } from '../constants';
import { ILoginParams } from '../models/interfaces/auth.interface';
import { TokenService } from './token.service';
import { StatusResponseLogin } from '../models/interfaces/statuts-response.entity';
import { ILoginResponse } from '../models/interfaces/login.interface';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private httpClient = inject(HttpClient);
    private tokenService = inject(TokenService);
    private userService = inject(UserService);
    private router = inject(Router)

    public loginSend(params: ILoginParams): Observable<StatusResponseLogin<ILoginResponse>> {
      return this.httpClient.post<StatusResponseLogin<ILoginResponse>>(ENDPOINT_CUSTOMER.login, params).pipe(
        tap((response: StatusResponseLogin<ILoginResponse>) => {
          this.tokenService.setSession(response.token);
          this.userService.setDataUser(response.data.idUserName, response.data.userName, response.data.rol)
          this.router.navigate(['vuelos-disponibles'])
        })
      );
    }
    public registerSend(params: ILoginParams): Observable<any> {
        return this.httpClient.post(ENDPOINT_CUSTOMER.register, params);
    }
}
