import {
    ActionReducerMap,
    createFeatureSelector,
} from '@ngrx/store';

import {
    personReducer,
    PersonState
} from './person.reducer';

export interface AppState {
    persons: PersonState;
}

export const reducers: ActionReducerMap<AppState> = {
    persons: personReducer
};

export const getAppState = createFeatureSelector<AppState>(
    'app'
);