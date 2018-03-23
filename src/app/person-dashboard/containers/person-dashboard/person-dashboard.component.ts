import { Component } from "@angular/core";
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

import { Person } from '../../models/person.model';

@Component({
    selector: 'person-dashboard',
    template: `
    <div>
        <person-detail
            *ngFor="let person of (persons$ | async)"
            [person]="person">
        </person-detail>
    </div>
    `
})
export class PersonDashboardComponent {
    persons$: Observable<Person[]>;

    constructor(private router: Router, private store: Store<fromStore.AppState>) { }

    ngOnInit() {
        this.persons$ = this.store.select(fromStore.getPersons);
        this.store.dispatch(new fromStore.LoadPersons());
    }

}