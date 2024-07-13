import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINT_SAGA } from '@/app/core/constants';

@Injectable({
  providedIn: 'root'
})
export class BookingService {


  private httpClient = inject(HttpClient)

  constructor() { }

  public bookingFlight(params : any) : Observable<any>{
    return this.httpClient.post(ENDPOINT_SAGA.booking, params);
  }
}
