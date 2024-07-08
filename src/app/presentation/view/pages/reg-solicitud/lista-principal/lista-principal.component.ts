import { Component, ViewChild, inject, signal } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { dataRegistroSolicitudList } from '@/app/db/regjstro-solicitud.const';
import { Menu, MenuModule } from 'primeng/menu';
import { ActivatedRoute, Router } from '@angular/router';

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
    ],
    templateUrl: './lista-principal.component.html',
    styleUrl: './lista-principal.component.scss',
})
export class ListaPrincipalComponent {
    public dataList = signal(dataRegistroSolicitudList);
    private idSelected!: number;
    @ViewChild('menu') menu!: Menu;

    public date: Date | undefined;
    public value2: Number | undefined;
    public items: any;

    private readonly router = inject(Router);
    private readonly activatedRoute = inject(ActivatedRoute);

    constructor() {
        this.initOptions();
    }

    public onRoute(idRegistro?: number): void {
        const route = idRegistro ? ['editar', idRegistro] : ['registrar'];
        this.router.navigate(route, { relativeTo: this.activatedRoute });
    }

    private initOptions(): void {
        this.items = [
            {
                label: 'Editar',
                icon: 'pi pi-pencil',
                command: () => {
                    this.onRoute(this.idSelected);
                },
            },
            {
                label: 'Eliminar',
                icon: 'pi pi-trash',
                command: () => {
                    console.log(this.idSelected, 'Eliminar');
                },
            },
        ];
    }

    public selectedData(event: any, item: number) {
        this.idSelected = item;
        this.menu.toggle(event);
    }
}
