import { AuthGuard } from "@/app/core/guards/auth.guard";
import { LoginGuard } from "@/app/core/guards/login.guard";
import { Routes } from "@angular/router";

export const dashboardRouters: Routes = [
  {
    path: '',
    loadComponent: () => import('@/app/features/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'vuelos-disponibles',
    loadComponent: () => import('@/app/features/flight-booking/flight-booking.component').then(m => m.FlightBookingComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@/app/features/flight-booking/components/lista-principal/lista-principal.component').then(m => m.ListaPrincipalComponent)
      },
      {
        path: 'reservar/:id',
        loadComponent: () => import('@/app/features/flight-booking/components/registro/registro.component').then(m => m.RegistroComponent),
      },
      {
        path : 'finalizar/:id',
        loadComponent: () => import('@/app/features/flight-booking/components/finish/finish.component').then(m => m.FinishComponent)
      },
      {
        path : 'success',
        loadComponent : () => import('@/app/features/flight-booking/components/success/success.component').then(m => m.SuccessComponent)
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('@/app/features/auth/components/login/login.component').then(m => m.LoginComponent),
    canActivate: [LoginGuard]
  },
  {
    path : 'mis-tickets',
    loadComponent: () => import('@/app/features/tickets/tickets.component').then(m => m.TicketsComponent),
    canActivate : [AuthGuard],
    children : [
      {
        path : '',
        loadComponent : () => import('@/app/features/tickets/components/lista/lista.component').then(m => m.ListaComponent)
      }
    ]
  }
];
