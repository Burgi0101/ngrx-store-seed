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
        (update)="onUpdatePerson($event)"></person-form>
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
        this.personService
            .getPersons()
            .subscribe((data: Person[]) => this.persons = data);
    }

    onUpdatePerson(event: Person) {

        event.id = parseInt(this.route.snapshot.paramMap.get('personId'));

        this.personService
            .updatePerson(event)
            .subscribe((data: Person) => this.person = { ...this.person, ...event })
    }

    goBack() {
        this.router.navigate(['/']);
    }
}