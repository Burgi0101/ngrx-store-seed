import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Person } from '../models/person.model';

@Injectable()
export class PersonService {

    constructor(private http: HttpClient) { }

    getPersons(): Observable<Person[]> {
        return this.http
            .get<Person[]>(`/api/persons`)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    getPerson(id: number): Observable<Person> {

        return this.http
            .get<Person>(`api/persons/${id}`)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    createPerson(payload: Person): Observable<Person> {

        return this.http
            .post<Person>(`/api/persons`, payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));

    }

    updatePerson(payload: Person): Observable<Person> {

        return this.http
            .put<Person>(`/api/persons/${payload.id}`, payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));

    }

    removePerson(payload: Person): Observable<Person> {

        return this.http
            .delete<any>(`/api/persons/${payload.id}`)
            .pipe(catchError((error: any) => Observable.throw(error.json())));

    }
}