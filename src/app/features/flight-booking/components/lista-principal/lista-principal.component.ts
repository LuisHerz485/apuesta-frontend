import { FlightService } from '@/app/features/flight-booking/services/flight.service';
import { AlertHelper } from '@/app/core/utils/alert.helper';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { DataTableComponent } from '@/app/shared/components/data-table/data-table.component';
import { COLUMNS_FLIGHT_NAME } from '../../constants/flights-columns.const';
import { ActionTable } from '@/app/shared/models';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { IFlight } from '../../interfaces';

@Component({
    selector: 'app-lista-principal',
    standalone: true,
    imports: [
        DividerModule,
        CalendarModule,
        FormsModule,
        FloatLabelModule,
        InputTextModule,
        InputNumberModule,
        DataTableComponent,
        LoadingComponent,
    ],
    templateUrl: './lista-principal.component.html',
    styleUrl: './lista-principal.component.scss',
})
export class ListaPrincipalComponent {
    public columnsNames = COLUMNS_FLIGHT_NAME;
    public dataList = signal<IFlight[]>([]);
    public idSelected = signal<number | undefined>(undefined);

    public date: Date | undefined;
    public nroPersonas: Number | undefined;
    public codVuelo: Number | undefined;
    public items: any;

    private readonly router = inject(Router);
    private readonly activatedRoute = inject(ActivatedRoute);
    private flightService = inject(FlightService);

    constructor() {
        this.initOptions();
        this.getList();
    }

    public onRoute(idRegistro?: number): void {
        const route = ['reservar', idRegistro];
        this.router.navigate(route, { relativeTo: this.activatedRoute });
    }

    private initOptions(): void {
        this.items = [
            {
                label: 'Reservar',
                icon: 'pi pi-pencil',
                command: () => {
                    this.onRoute(this.idSelected());
                },
            },
            {
                label: 'Consultar',
                icon: 'pi pi-search',
                command: () => {},
            },
        ];
    }

    public setSelectedId($event: ActionTable): void {
        this.idSelected.set($event.row);
    }

    private getList(): void {
        this.flightService.getListFlightData().subscribe({
            next: response => {
                if (response.data) {
                    this.dataList.set(response.data);
                }
            },
            error: error => {
                AlertHelper.ErrorService();
            },
        });
    }
}
