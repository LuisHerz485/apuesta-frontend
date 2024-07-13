import { Routes } from '@angular/router';
import { dashboardRouters } from './features/dashboard/routing';

export const routes: Routes = [
    {
        path : '',
        children : dashboardRouters,
        canActivate : []
    }
];
