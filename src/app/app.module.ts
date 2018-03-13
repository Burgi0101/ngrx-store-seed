import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { PersonDashboardModule } from './person-dashboard/person-dashboard.module';
import { AppComponent } from './app.component';


const isProd = process.env.NODE_ENV === 'production' ? true : false;
const isDev = process.env.NODE_ENV === 'development' ? true : false;

export const metaReducers: MetaReducer<any>[] = !isProd
    ? [storeFreeze]
    : [];

export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'persons' },
    {
        path: 'persons',
        loadChildren: './person-dashboard/person-dashboard.module#PersonDashboardModule',
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        StoreModule.forRoot({}, { metaReducers }),
        EffectsModule.forRoot([]),
        isDev ? StoreDevtoolsModule.instrument() : [],
        PersonDashboardModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }