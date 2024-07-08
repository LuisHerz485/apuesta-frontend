import { BookingService } from '@/app/data/services/booking.service';
import { FlightService } from '@/app/data/services/flight.service';
import { LoginService } from '@/app/data/services/login.service';
import { NgClass } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-registro',
    standalone: true,
    imports: [
        ButtonModule,
        NgClass,
        ReactiveFormsModule,
        FloatLabelModule,
        InputTextModule,
        FormsModule,
        ButtonModule,
    ],
    templateUrl: './registro.component.html',
    styleUrl: './registro.component.scss',
})
export class RegistroComponent implements OnInit {
    protected idflightSelected = signal<number | undefined>(undefined);
    protected idSeatSelected = signal<number | undefined>(undefined);
    private activatedRoute = inject(ActivatedRoute);
    private flightService = inject(FlightService);
    private loginService = inject(LoginService);
    private bookingService = inject(BookingService);
    private router = inject(Router);

    public formLogin!: FormGroup;

    public seatList: any[] = [];

    constructor(private _fb: FormBuilder) {
        this.getIdFlight();
        this.initForm();
    }

    ngOnInit(): void {
        this.getSeatListFlight(this.idflightSelected.toString());
    }

    private initForm(): void {
        this.formLogin = this._fb.group({
            userName: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    private getIdFlight(): void {
        this.activatedRoute.params.subscribe({
            next: param => {
                this.idflightSelected = param['id'] ?? undefined;
            },
            error: error => {
                alert(`Error: ${error}`);
            },
        });
    }

    private getSeatListFlight(idFlight: string): void {
        this.flightService.getSeatsByFlight(idFlight).subscribe({
            next: param => {
                this.seatList = [param.data];
            },
            error: error => {
                alert(`${error.error.message}`);
            },
        });
    }

    public handleReservationTemp(itemId: number) {
        const selectedItem = this.seatList.find(item => item.id === itemId);
        if (selectedItem) {
            selectedItem.isSelected = !selectedItem.isSelected;

            this.idSeatSelected.set(itemId);
            const params = {
                idSeat: itemId,
                idCustomer: 0,
                idFlight: this.idflightSelected,
            };

            this.flightService.temporalReservationSeat(params).subscribe({
                next: (param: any) => {
                    console.log(param);
                },
            });
        }
    }

    public handleReservationSaga() {
        this.login();
    }

    private login() {
        this.loginService.loginSend(this.formLogin.value).subscribe({
            next: response => {
                localStorage.setItem('token', response.token);
                this.sendSaga(response.idUserName);
            },
        });
    }

    private sendSaga(idUserName: number) {
        const params = {
            idCustomer: idUserName,
            idFlight: Number(this.idflightSelected),
            idSeat: this.idSeatSelected(),
        };

        console.log('SAGA PARAMS', params);

        this.bookingService.bookingFlight(params).subscribe(response => {
            alert('Se registro el ticket');
        });
    }
}
