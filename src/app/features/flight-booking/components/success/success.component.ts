import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {

  private router = inject(Router)

  public onRoute() : void {
    this.router.navigate(['mis-tickets'])
  }
}
