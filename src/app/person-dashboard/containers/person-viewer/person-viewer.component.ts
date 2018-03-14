import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
    selector: 'person-viewer',
    template: `
    <div>
        <button (click)="goBack()">
            &lsaquo; Go back    
        </button>
        <person-form
            [detail]="person"
            (update)="onUpdatePerson($event)">
        </person-form>
    </div>
    `
})
export class PersonViewerComponent implements OnInit {

    person: Person;
    persons: Person[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private personService: PersonService) { }

    ngOnInit() {

        this.route.params
            .switchMap((data: Person) => {
                return this.personService.getPerson(data.id)
            }).subscribe((data: Person) => this.person = data);

        this.personService
            .getPersons()
            .subscribe((data: Person[]) => this.persons = data);
    }

    onUpdatePerson(event: Person) {
        this.personService
            .updatePerson(event)
            .subscribe((data: Person) => this.person = { ...this.person, ...event })
    }

    goBack() {
        this.router.navigate(['/']);
    }
}