import {
    ApplicationConfig,
    importProvidersFrom,
    provideZoneChangeDetection,
    isDevMode,
} from '@angular/core';
import {
    PreloadAllModules,
    provideRouter,
    withEnabledBlockingInitialNavigation,
    withHashLocation,
    withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import {
    BrowserModule,
    provideClientHydration,
} from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { SpinnerInterceptor } from './core/interceptors/spinner.interceptor';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AuthEffects } from './features/auth/store/effects/auth.effect';
import { seatReducer } from './features/flight-booking/store/reducers/seat.reducer';
import { totalPriceReducer } from './features/flight-booking/store/reducers/total-price.reducer';
export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        importProvidersFrom(BrowserModule),
        provideRouter(
            routes,
            withHashLocation(),
            withEnabledBlockingInitialNavigation(),
            withPreloading(PreloadAllModules),
        ),
        provideClientHydration(),
        ConfirmationService,
        MessageService,
        DialogService,
        provideAnimations(),
        provideHttpClient(
            withInterceptors([SpinnerInterceptor, AuthInterceptor]),
        ),  
        provideStore({ seatMap : seatReducer, totalPrice : totalPriceReducer }, {}),
        provideEffects([AuthEffects]),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    ],
};
