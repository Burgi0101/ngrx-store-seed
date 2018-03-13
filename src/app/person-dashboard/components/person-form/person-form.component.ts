import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Person } from '../../models/person.model';

@Component({
    selector: 'person-form',
    template: `
    <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
        <div>
            Name:
            <input 
                type="text"
                name="name"
                required
                #name="ngModel"
                [ngModel]="detail?.name">

            <div *ngIf="name.errors?.required && name.dirty" class="error">
                Passenger name is required
            </div>
        </div>
        <button type="submit" [disabled]="form.invalid">
            Update Person
        </button>
    </form>
`
})
export class PersonFormComponent {

    @Input()
    detail: Person;

    @Output()
    update: EventEmitter<Person> = new EventEmitter<Person>();

    handleSubmit(person: Person, isValid: boolean) {
        if(isValid) this.update.emit(person);
    }
 }