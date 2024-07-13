import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ENDPOINT_FLIGHTS } from '@/app/core/constants';
import {
    PaginatedResponse,
    StatusResponseData,
} from '@/app/core/models/interfaces';
import { IFlight } from '../interfaces';
import { ISeat } from '../interfaces/seat.interface';

@Injectable({
    providedIn: 'root',
})
export class FlightService {
    private httpClient = inject(HttpClient);

    constructor() {}

    public getListFlightData(): Observable<PaginatedResponse<IFlight[]>> {
        return this.httpClient
            .get<PaginatedResponse<IFlight[]>>(
                ENDPOINT_FLIGHTS.getListPaginantedFlight,
            )
            .pipe(map(r => r));
    }

    public getSeatsByFlight(
        idFlight: string,
    ): Observable<StatusResponseData<ISeat[]>> {
        return this.httpClient
            .get<StatusResponseData<ISeat[]>>(
                `${ENDPOINT_FLIGHTS.getSeats}${idFlight}`,
            )
            .pipe(r => r);
    }

    public temporalReservationSeat(params: any): Observable<any> {
        return this.httpClient.post(
            ENDPOINT_FLIGHTS.temporalReservation,
            params,
        );
    }

}
