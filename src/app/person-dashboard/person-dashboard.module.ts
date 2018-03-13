import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Route } from '@angular/router';

import { PersonDashboardComponent } from './containers/person-dashboard/person-dashboard.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';

import { PersonViewerComponent } from './containers/person-viewer/person-viewer.component';

import { PersonService } from './services/person.service';

export const ROUTES: Routes = [
    {
        path: '',
        component: PersonDashboardComponent,
    },
    {
        path: ':personId',
        component: PersonViewerComponent
    }
];

@NgModule({
    declarations: [
        PersonDashboardComponent,
        PersonDetailComponent,
        PersonViewerComponent,
        PersonFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(ROUTES)
    ],
    providers: [
        PersonService
    ],
    exports: [
        PersonDashboardComponent,
        PersonDetailComponent,
        PersonViewerComponent,
        PersonFormComponent
    ]
})
export class PersonDashboardModule { }