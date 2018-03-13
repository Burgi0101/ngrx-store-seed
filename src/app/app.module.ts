import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

const isProd = process.env.NODE_ENV === 'production' ? true : false;
const isDev = process.env.NODE_ENV === 'development' ? true : false;

export const metaReducers: MetaReducer<any>[] = !isProd
    ? [storeFreeze]
    : [];

// bootstrap
import { AppComponent } from './app.component';

// routes
export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(ROUTES),
        StoreModule.forRoot({}, { metaReducers }),
        EffectsModule.forRoot([]),
        isDev ? StoreDevtoolsModule.instrument() : [],
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }