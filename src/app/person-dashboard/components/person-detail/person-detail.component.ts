import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Person } from '../../models/person.model';

@Component({
    selector: 'person-detail',
    template: `
    <div>
        <div>
            {{ person.name }}
        </div>
        <button (click)="onRemove()">
            Remove
        </button>
        <button [routerLink]="['/persons', person.id]">
            View
       </button>
    </div>
    `
})
export class PersonDetailComponent implements OnChanges {

    @Input()
    person: Person;

    @Output()
    edit: EventEmitter<Person> = new EventEmitter<Person>();

    @Output()
    remove: EventEmitter<Person> = new EventEmitter<Person>();

    constructor() { }

    ngOnChanges(changes: any) {

        if (changes.person) {
            this.person = { ...changes.person.currentValue };
        }
    }

    onNameChange(value: string) {
        this.person.name = value;
    }

    onRemove() {
        this.remove.emit(this.person);
    }
}