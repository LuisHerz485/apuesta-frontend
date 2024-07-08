import { Injectable, inject } from '@angular/core';
import { CustomerService } from './customer.service';
import { environment } from '@/environments/environment';
import { ENDPOINT_CUSTOMER } from '../utils/const/endpoints.const';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly mainApiURL = environment.apis.mainApi;
  private readonly login = `${this.mainApiURL}${ENDPOINT_CUSTOMER.login}`

  private httpClient = inject(HttpClient)

  constructor() { }

  public loginSend(params : any) : Observable<any>{
    return this.httpClient.post(`${this.login}`, params)
  }
}
