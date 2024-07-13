import { SidebarComponent } from '@/app/core/components/sidebar/sidebar.component';
import { TopbarComponent } from '@/app/core/components/topbar/topbar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [TopbarComponent, RouterOutlet, SidebarComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {

}
