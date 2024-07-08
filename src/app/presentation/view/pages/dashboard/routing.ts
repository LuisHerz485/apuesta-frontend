import { Routes } from "@angular/router";

export const dashboardRouters: Routes = [
    {
      path: '',
      loadComponent: () => import('@/app/presentation/view/pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
      children: [
        {
          path : 'vuelos-disponibles',
          loadComponent: () => import('@/app/presentation/view/pages/reg-vuelo/reg-vuelo.component').then(m => m.RegVueloComponent),
          children : [
            {
              path : '',
              loadComponent: () => import('@/app/presentation/view/pages/reg-vuelo/lista-principal/lista-principal.component').then(m => m.ListaPrincipalComponent)
            },
            {
              path : 'reservar/:id',
              loadComponent : () => import('@/app/presentation/view/pages/reg-vuelo/registro/registro.component').then(m => m.RegistroComponent),
            },
          ]
        }
      ]
    }
  ];
  