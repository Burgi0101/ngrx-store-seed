import { Component } from "@angular/core";
import { Router } from '@angular/router';

import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
    selector: 'person-dashboard',
    template: `
    <div>
        <person-detail
            *ngFor="let person of persons;"
            [detail]="person"
            (edit)="handleEdit($event)"
            (remove)="handleRemove($event)"
            (view)="handleView($event)">
        </person-detail>
    </div>
    `
})
export class PersonDashboardComponent {
    persons: Person[];

    constructor(private router: Router, private personService: PersonService) { }

    ngOnInit() {

        this.personService
            .getPersons()
            .subscribe((data: Person[]) => this.persons = data);

    }

    handleRemove(event: Person) {

        this.personService
            .removePerson(event)
            .subscribe((data: Person) => {
                this.persons = this.persons.filter((person: Person) => event.id !== person.id);
            });

    }

    handleEdit(event: Person) {
        this.personService
            .updatePerson(event)
            .subscribe((data: Person) => {

                this.persons = this.persons.map((person: Person) => {

                    if (person.id === event.id) {
                        person = { ...person, ...event };
                    }

                    return person;
                })
            });

    }

    handleView(event: Person) {
        this.router.navigate(['/persons', event.id]);
    }

}