import { SidebarOptions } from '@/app/assets/db/sidebarOps.const';
import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { TokenService } from '../../services/token.service';
import { ISidebarOption } from '../../models/interfaces';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [NgOptimizedImage, BadgeModule],
    templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
    public sidebarOptions : ISidebarOption[] = [];
    private tokenService = inject(TokenService);
    private readonly router = inject(Router);

    constructor() {
        this.filterOptions();
    }

    public handleRoute(route: string): void {
        this.router.navigate([route]);
    }

    private filterOptions() : void {
        const isAuth = this.tokenService.getToken;

        this.sidebarOptions = SidebarOptions.filter(element => {
            if (isAuth && (element.user === 'free' || element.user === 'customer')) {
                return true;
            } else if (!isAuth && element.user === 'free') {
                return true;
            }
            return false;
        });
        
        
    }
}
