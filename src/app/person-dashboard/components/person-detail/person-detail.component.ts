import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Person } from '../../models/person.model';

@Component({
    selector: 'person-detail',
    template: `
    <div>
        <div *ngIf="editing">
            <input 
                type="text" 
                [value]="detail.name"
                (input)="onNameChange(name.value)"
                #name>
        </div>
        <div>
            {{ detail.name }}
        </div>
        <button (click)="onRemove()">
            Remove
        </button>
        <button (click)="goToPerson()">
            View
       </button>
    </div>
    `
})
export class PersonDetailComponent implements OnChanges {

    @Input()
    detail: Person;

    @Output()
    edit: EventEmitter<Person> = new EventEmitter<Person>();

    @Output()
    remove: EventEmitter<Person> = new EventEmitter<Person>();

    @Output()
    view: EventEmitter<Person> = new EventEmitter<Person>();

    editing: boolean = false;

    constructor() { }

    ngOnChanges(changes: any) {
        if (changes.detail) {
            this.detail = { ...changes.detail.currentValue };
        }
    }

    onNameChange(value: string) {
        this.detail.name = value;
    }

    onRemove() {
        this.remove.emit(this.detail);
    }

    toogleEdit() {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    goToPerson() {
        this.view.emit(this.detail);
    }
}