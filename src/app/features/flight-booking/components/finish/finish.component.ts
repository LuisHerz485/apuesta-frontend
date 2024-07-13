import { Component, OnInit, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Seat, SeatState } from '../../store/states/seat.state';
import { Store } from '@ngrx/store';
import { TotalPriceState } from '../../store/states/total-price.state';
import { AsyncPipe, CurrencyPipe, NgFor } from '@angular/common';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '@/app/core/services/user.service';

@Component({
    selector: 'app-finish',
    standalone: true,
    imports: [
        NgFor,
        AsyncPipe,
        CurrencyPipe,
        ReactiveFormsModule,
        FloatLabelModule,
        InputNumberModule,
        InputTextModule,
        ButtonModule,
    ],
    templateUrl: './finish.component.html',
    styleUrl: './finish.component.scss',
})
export class FinishComponent implements OnInit {
    protected idflightSelected = signal<number | undefined>(undefined);
    protected selectedSeats$: Observable<Seat[]>;
    protected totalPrice$: Observable<number>;

    private fb = inject(FormBuilder);
    private router = inject(Router);
    private bookingService = inject(BookingService);
    private userService = inject(UserService);
    private activatedRoute = inject(ActivatedRoute);

    protected paidForm!: FormGroup;
    private selectedSeats!: Seat[];
    protected totalPriceStore: number = 0;

    constructor(
        private store: Store<{
            seatMap: SeatState;
            totalPrice: TotalPriceState;
        }>,
    ) {
        this.initFormPaid();
        this.selectedSeats$ = store.select(
            state => state.seatMap.selectedSeats,
        );
        this.totalPrice$ = store.select(state => state.totalPrice.totalPrice);
    }

    ngOnInit(): void {
        this.getStore();
        this.getIdFlight();
    }

    private getIdFlight(): void {
        this.activatedRoute.params.subscribe({
            next: param => {
                this.idflightSelected = param['id'] ?? undefined;
            },
        });
    }

    private getStore(): void {
        this.selectedSeats$.subscribe(seats => {
            this.selectedSeats = seats;
        });

        this.totalPrice$.subscribe(totalPrice => {
            this.totalPriceStore = totalPrice;
        });
    }

    private initFormPaid(): void {
        this.paidForm = this.fb.group({
            cardNumber: [null, Validators.required],
            expiredDate: ['', Validators.required],
            cvv: ['', Validators.required],
            title: ['', Validators.required],
        });
    }

    public paid(): void {
        const user = this.userService.getDataUser();
        const param = {
            idCustomer: user?.idCustomer,
            idFlight: Number(this.idflightSelected),
            idSeat: this.selectedSeats[0].id,
        };
        this.bookingService.bookingFlight(param).subscribe();
        this.router.navigate(['vuelos-disponibles/success']);
    }
}
