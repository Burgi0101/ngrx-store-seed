import * as personActions from '../actions/person.actions';
import { Person } from '../../models/person.model';

export interface PersonState {
    entities: { [id: number]: Person };
    loaded: boolean;
    loading: boolean;
}

export const initialSate: PersonState = {
    entities: {},
    loaded: false,
    loading: false
};

export function personReducer(state = initialSate, action: personActions.PersonAction) {
    switch (action.type) {

        case personActions.LOAD_PERSONS: {
            return {
                ...state,
                loaded: false,
                loading: true
            }
        }

        case personActions.LOAD_PERSONS_SUCCESS: {

            const persons = action.payload;

            const entities = persons.reduce(
                (entities: { [id: number]: Person }, person: Person) => {
                    return {
                        ...entities,
                        [person.id]: person
                    };
                },
                {
                    ...state.entities
                }
            );

            return {
                ...state,
                loaded: true,
                loading: false,
                entities
            }
        }

        case personActions.LOAD_PERSONS_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false
            }
        }

        default: return state;
    }
}