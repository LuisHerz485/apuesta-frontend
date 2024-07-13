import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { IUserDataCookie } from '../../models/interfaces';
import { TokenService } from '../../services/token.service';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [],
    templateUrl: './topbar.component.html',
})
export class TopbarComponent {
    private userService = inject(UserService);
    private tokenService = inject(TokenService)
    private router = inject(Router);
    public userData!: IUserDataCookie | null;

    constructor() {
        this.getUserData();
    }

    private getUserData(): void {
        this.userData = this.userService.getDataUser();
    }

    public onRouteLogin(): void {
        this.router.navigate(['login']);
    }

    public signOut() : void {
        this.tokenService.signOut();
        this.userService.clearDataUser();
    }
}
