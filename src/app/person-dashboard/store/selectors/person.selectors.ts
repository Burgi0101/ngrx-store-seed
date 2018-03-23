import { createSelector } from '@ngrx/store';

import { AppState, getAppState } from '../reducers';
import { PersonState } from '../reducers/person.reducer';


export const getPersonState = createSelector(
    getAppState,
    (state: AppState) => state.persons
);

export const getPersonEntities = createSelector(
    getPersonState,
    (state: PersonState) => state.entities
);

export const getPersons = createSelector(
    getPersonEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
    }
)

export const getPersonsLoaded = createSelector(
    getPersonState,
    (state: PersonState) => state.loaded
);

export const getPersonsLoading = createSelector(
    getPersonState,
    (state: PersonState) => state.loading
);