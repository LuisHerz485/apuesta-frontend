import { SeatMapComponent } from '@/app/shared/components/seat-map/seat-map.component';
import {
    AsyncPipe,
    CommonModule,
    CurrencyPipe,
    NgClass,
    NgFor,
} from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SEAT_SETTING, SEAT_STATUS } from '@/app/core/constants';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FlightService } from '../../services/flight.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TotalPriceState } from '../../store/states/total-price.state';
import { Seat, SeatState } from '../../store/states/seat.state';
import { addSeat, removeSeat } from '../../store/actions/seat.actions';
import { TokenService } from '@/app/core/services/token.service';
import { BookingService } from '../../services/booking.service';

@Component({
    selector: 'app-registro',
    standalone: true,
    imports: [
        CommonModule,
        ButtonModule,
        NgClass,
        ReactiveFormsModule,
        FloatLabelModule,
        InputTextModule,
        FormsModule,
        ButtonModule,
        DividerModule,
        SeatMapComponent,
        NgFor,
        AsyncPipe,
        CurrencyPipe,
    ],
    templateUrl: './registro.component.html',
    styleUrl: './registro.component.scss',
})
export class RegistroComponent implements OnInit {
    protected idflightSelected = signal<number | undefined>(undefined);

    public seats: any[] = [];
    public maxSelections = signal<number>(SEAT_SETTING.CUSTOMER.MAX_SELECT);
    public rows : number = 20;
    public cols: number = 6;

    private flightService = inject(FlightService);
    private activatedRoute = inject(ActivatedRoute);
    private tokenService = inject(TokenService);
    private router = inject(Router);

    selectedSeats: Set<string> = new Set();

    selectedSeats$: Observable<Seat[]>;
    totalPrice$: Observable<number>;

    constructor(
        private store: Store<{
            seatMap: SeatState;
            totalPrice: TotalPriceState;
        }>,
    ) {
        this.selectedSeats$ = store.select(
            state => state.seatMap.selectedSeats,
        );
        this.totalPrice$ = store.select(state => state.totalPrice.totalPrice);
        this.getIdFlight();
    }

    ngOnInit(): void {
        this.getSeatListFlight(this.idflightSelected.toString());
    }

    private getSeatListFlight(idFlight: string): void {
        this.flightService.getSeatsByFlight(idFlight).subscribe({
            next: param => {
                if (param.data) {
                    this.seats = param.data;
                }
            },
            error: error => {
                alert(`${error.error.message}`);
            },
        });
    }

    private getIdFlight(): void {
        this.activatedRoute.params.subscribe({
            next: param => {
                this.idflightSelected = param['id'] ?? undefined;
            },
        });
    }

    public isSelected(seat: string): boolean {
        return this.selectedSeats.has(seat);
    }

    public toggleSeat(codSeat: string): void {
        const foundSeat = this.seats.find(seat => seat.codSeat === codSeat);

        if (!foundSeat) {
            console.error(`Asiento con codigo${codSeat} no encontrado.`);
            return;
        }

        console.log(foundSeat)


        if (this.isSelected(codSeat)) {
            this.selectedSeats.delete(codSeat);
            this.store.dispatch(
                removeSeat({
                    codSeat: foundSeat.codSeat,
                    seatPrice: foundSeat.price,
                }),
            );
        } else if (
            this.selectedSeats.size < this.maxSelections() &&
            !this.isSeatUnavailable(codSeat)
        ) {
            const params = {
                idSeat: foundSeat.id,
                idCustomer: 0,
                idFlight: this.idflightSelected,
            };

            this.flightService.temporalReservationSeat(params).subscribe();
            this.selectedSeats.add(codSeat);
            this.store.dispatch(addSeat({ seat: foundSeat }));
        }
    }

    public isSeatUnavailable(seatNumber: string): boolean {
        const seat = this.seats.find(s => s.codSeat === seatNumber);
        return (
            !!seat &&
            (seat.status === SEAT_STATUS.PAID ||
                seat.status === SEAT_STATUS.RESERVATION)
        );
    }

    public getSeatLabel(row: number, col: number): string {
        const firstPart = String.fromCharCode(65 + Math.floor(row / 26));
        const secondPart = String.fromCharCode(65 + (row % 26));
        return `${firstPart}${secondPart}${col + 1}`;
    }

    public getRange(count: number): number[] {
        return new Array(count);
    }

    public onRoute(): void {
        const isAuthenticated = this.tokenService.isAuthenticated();
        const navigateURL = isAuthenticated
            ? `vuelos-disponibles/finalizar/${this.idflightSelected}`
            : 'login';

        this.router.navigate([navigateURL]);
    }
}
