import { COLUMNS_FLIGHT_NAME } from '@/app/features/flight-booking/constants/flights-columns.const';
import { DataTableComponent } from '@/app/shared/components/data-table/data-table.component';
import { LoadingComponent } from '@/app/shared/components/loading/loading.component';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { TicketService } from '../../services/ticket.service';
import { COLUMNS_TICKETS } from '../../constants/ticket-columns.const';

@Component({
    selector: 'app-lista',
    standalone: true,
    imports: [
        LoadingComponent,
        DividerModule,
        FloatLabelModule,
        CalendarModule,
        InputNumberModule,
        DataTableComponent,
        FormsModule,
    ],
    templateUrl: './lista.component.html',
    styleUrl: './lista.component.scss',
})
export class ListaComponent {
  public columnsNames = COLUMNS_TICKETS;
  public dataList = signal<any[]>([]);
  public date: Date | undefined;
  public nroPersonas: Number | undefined;
  public codVuelo: Number | undefined;
  public items: any;

  private ticketService = inject(TicketService);


  constructor() {
    this.getMyTickets()
  }

  private getMyTickets() : void {
    this.ticketService.getTickets(1).subscribe({
      next : response => {
        this.dataList.set(response)
      }
    })
  }
}
