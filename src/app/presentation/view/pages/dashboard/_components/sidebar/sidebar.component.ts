import { SidebarOptions } from '@/app/db/sidebarOps.const';
import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgOptimizedImage, BadgeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public sidebarOptions = SidebarOptions;
  private readonly router = inject(Router);

  public handleRoute(route : string) : void {
    console.log(route)
    this.router.navigate([route])
  }
}
