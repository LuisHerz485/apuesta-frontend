import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
    signal,
} from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { Menu, MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ActionTable } from '../../models';
import { IColumnTable } from '@/app/core/models/interfaces';

@Component({
    selector: 'app-data-table',
    standalone: true,
    imports: [
        FloatLabelModule,
        CalendarModule,
        InputNumberModule,
        MenuModule,
        TableModule,
    ],
    templateUrl: './data-table.component.html'
})
export class DataTableComponent {
    public cols = signal<IColumnTable[]>([]);
    public dataList = signal<any[]>([]);
    public items = signal<any>(undefined);

    @ViewChild('menu') menu!: Menu;

    @Input() set columns(columns: IColumnTable[]) {
        this.cols.set(columns);
    }

    @Input() set data(data: any) {
        this.dataList.set(data);
    }

    @Input() set options(options: any) {
        this.items.set(options);
    }

    @Output() action: EventEmitter<ActionTable> = new EventEmitter();

    public onAction($event: any, id: number): void {
        this.menu.toggle($event);
        this.action.emit({ action: $event, row: id });
    }

}
