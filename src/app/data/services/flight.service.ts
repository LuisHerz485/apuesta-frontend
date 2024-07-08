import { environment } from '@/environments/environment';
import { Injectable, inject } from '@angular/core';
import { ENDPOINT_FLIGHTS } from '../utils/const';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PaginatedResponse } from '@/app/domain/interfaces/global/paginated.response';
import { FlightEntity } from '@/app/domain/entities';
import { MiddlewareWrapper } from '@/app/domain/entities/midddleware-wrapper.entity';

@Injectable({
    providedIn: 'root',
})
export class FlightService {
    private readonly mainApiURL = environment.apis.mainApi;
    private readonly getListFlight = `${this.mainApiURL}${ENDPOINT_FLIGHTS.getListPaginantedFlight}`;
    private readonly getSeatsList = `${this.mainApiURL}${ENDPOINT_FLIGHTS.getSeats}`
    private readonly temporalReservation = `${this.mainApiURL}${ENDPOINT_FLIGHTS.temporalReservation}`
    private  httpClient = inject(HttpClient);

    constructor() {}

    public getListFlightData(): Observable<PaginatedResponse<FlightEntity[]>> {
        return this.httpClient
            .get<MiddlewareWrapper<PaginatedResponse<FlightEntity[]>>>(
                this.getListFlight,
            )
            .pipe(map(r => r.Body));
    }

    public getListFlightData2(): Observable<any> {
        return this.httpClient.get(this.getListFlight);
    }

    public getSeatsByFlight(idFlight : string) : Observable<any>{
      return this.httpClient.get(`${this.getSeatsList}${idFlight}`);
    }

    public temporalReservationSeat(params : any) : Observable<any> {
      return this.httpClient.post(`${this.temporalReservation}`, params)
    }
}
