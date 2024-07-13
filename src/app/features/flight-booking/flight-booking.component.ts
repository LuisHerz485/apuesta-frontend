import { SidebarComponent } from '@/app/core/components/sidebar/sidebar.component';
import { TopbarComponent } from '@/app/core/components/topbar/topbar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reg-vuelo',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, SidebarComponent, ],
  templateUrl: './flight-booking.component.html',
  styleUrl: './flight-booking.component.scss'
})
export class FlightBookingComponent {

}
