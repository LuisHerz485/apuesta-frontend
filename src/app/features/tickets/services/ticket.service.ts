import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISeat } from '../../flight-booking/interfaces';
import { ENDPOINT_CUSTOMER } from '@/app/core/constants';

@Injectable({
    providedIn: 'root',
})
export class TicketService {
    private httpClient = inject(HttpClient);

    constructor() {}

    public getTickets(idCustomer: number): Observable<ISeat[]> {
        return this.httpClient.get<ISeat[]>(
            `${ENDPOINT_CUSTOMER.myTickets}/${idCustomer}`,
        );
    }
}
