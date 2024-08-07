import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
    selector: 'app-loading',
    standalone: true,
    imports: [NgxSpinnerModule, NgOptimizedImage],
    templateUrl: './loading.component.html',
    styleUrl: './loading.component.scss',
})
export class LoadingComponent {}
