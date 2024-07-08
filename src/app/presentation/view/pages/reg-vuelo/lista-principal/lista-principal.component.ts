import { FlightService } from '@/app/data/services/flight.service';
import { FlightEntity } from '@/app/domain/entities';
import { AlertHelper } from '@/app/domain/utils/alert.helper';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewChild, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { Menu, MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';

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
        TableModule,
        MenuModule,
        DatePipe
        
    ],
    templateUrl: './lista-principal.component.html',
    styleUrl: './lista-principal.component.scss',
})
export class ListaPrincipalComponent {
    public dataList = signal<FlightEntity[]>([]);
    private idSelected!: number;
    @ViewChild('menu') menu!: Menu;

    public date: Date | undefined;
    public nroPersonas: Number | undefined;
    public codVuelo: Number | undefined;
    public items: any;

    private readonly router = inject(Router);
    private readonly activatedRoute = inject(ActivatedRoute);
    private flightService = inject(FlightService)
 

    constructor() {
        this.initOptions();
        this.getList()
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
                    this.onRoute(this.idSelected);
                },
            },
            {
              label : 'Consultar',
              icon : 'pi pi-search',
              command: () => {
                  
              }
            }
        ];
    }

    public selectedData(event: any, item: number) {
        this.idSelected = item;
        this.menu.toggle(event);
    }

    private getList() : void {
      this.flightService.getListFlightData2().subscribe({
        next : (response) => {
          if(response.data){

            this.dataList.set(response.data)
          }
          console.log(response)
        },error : (error) => {
          AlertHelper.ErrorService()
        }
      })
    }
}
