import { environment } from '@/environments/environment';
import { Injectable, inject } from '@angular/core';
import { ENDPOINT_SAGA } from '../utils/const/endpoints.const';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly mainApiURL = environment.apis.mainApi;
  private readonly activatedSAGA = `${this.mainApiURL}${ENDPOINT_SAGA.booking}`

  private httpClient = inject(HttpClient)

  constructor() { }

  public bookingFlight(params : any) : Observable<any>{
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.httpClient.post(`${this.activatedSAGA}`, params, { headers });
  }
}
