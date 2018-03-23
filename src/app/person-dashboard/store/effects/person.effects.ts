import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as personActions from '../actions/person.actions';
import { PersonService } from '../../services/person.service';

@Injectable()
export class PersonEffects {

    constructor(
        private actions$: Actions,
        private personService: PersonService
    ) { }

    @Effect()
    loadPersons$ = this.actions$.ofType(personActions.LOAD_PERSONS).pipe(
        switchMap(() => {
            return this.personService
                .getPersons()
                .pipe(
                    map(persons => new personActions.LoadPersonsSuccess(persons)),
                    catchError(error => of(new personActions.LoadPersonsFail(error)))
                );
        })
    );
}