import { Routes } from '@angular/router';
import { dashboardRouters } from './presentation/view/pages/dashboard/routing';

export const routes: Routes = [
    {
        path : '',
        children : dashboardRouters,
        canActivate : []
    }
];
