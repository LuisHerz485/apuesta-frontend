import { Component } from '@angular/core';
import { SidebarComponent } from './_components/sidebar/sidebar.component';
import { TopbarComponent } from './_components/topbar/topbar.component';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent, NgClass, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
