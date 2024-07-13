import { ISidebarOption } from '@/app/core/models/interfaces';

export const SidebarOptions: ISidebarOption[] = [
    {
        id: 1,
        title: 'Buscar Vuelo',
        icon: 'pi pi-pen-to-square',
        route: 'vuelos-disponibles',
        user: 'free',
    },
    {
        id: 2,
        title: 'Mis Tickets',
        icon: 'pi pi-ticket',
        route: 'mis-tickets',
        user: 'customer',
    },
];
