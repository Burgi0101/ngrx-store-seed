import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    template: `
    <div>
        Persons Application
        <router-outlet></router-outlet>
    <div>
    `
})
export class AppComponent { }