import { Component, inject } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/actions/auth.action';
import { AuthState } from '../../interfaces/auth-state.interface';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        NgOptimizedImage,
        ButtonModule,
        ReactiveFormsModule,
    ],
    templateUrl: './login.component.html'
})
export class LoginComponent {
    public loginForm!: FormGroup;

    private store = inject(Store<AuthState>);
    private fb = inject(FormBuilder)

    constructor() {
        this.initFormLogin();
    }

    private initFormLogin(): void {
        this.loginForm = this.fb.group({
            userName: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    public submit(): void {
        const { userName, password } = this.loginForm.value;
        this.store.dispatch(AuthActions.login({ userName, password }));
    }
}
