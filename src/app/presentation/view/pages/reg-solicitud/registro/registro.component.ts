import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { SolicitudComponent } from './solicitud/solicitud.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [StepperModule, ButtonModule, NgClass, SolicitudComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss',
})
export class RegistroComponent {
  public titleAction!: string;
  public active = signal<number>(0);
  protected idSelected = signal<number | undefined>(undefined);
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.getAction();
  }

  private getAction(): void {
    this.activatedRoute.params.subscribe({
      next: (param) => {
        this.idSelected = param['id'] ?? undefined;
        console.log(this.idSelected, 'ID DE VUELO')
      },
      error : error => {
        alert(`Error: ${error}`)
      }
    });
  }
}
