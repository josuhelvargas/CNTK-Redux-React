import { Action, Reducer } from 'redux';

//Definicion del tipo de dato gestionado por el Store.
export interface CounterState {
    count: number;
}


// Acciones - descripciones serializables de las transiciones de estado
// Solo describen que sucedera algo
// @typeName , isActionType para deteccion que fucnione despeus de serializacion o deserializacion
export interface IncrementCountAction { type: 'INCREMENT_COUNT' }
export interface DecrementCountAction { type: 'DECREMENT_COUNT' }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = IncrementCountAction | DecrementCountAction;

// ----------------
// ACTION CREATORS - funciones expuestas por los componentes de UI que disparan la transicion de estados
// No mutan lso estados directaemente.

export const actionCreators = {
    increment: () => ({ type: 'INCREMENT_COUNT' } as IncrementCountAction),
    decrement: () => ({ type: 'DECREMENT_COUNT' } as DecrementCountAction)
};

// ----------------
// REDUCER - Par una accion y estado , retornan un nuevo estado  no deberian utar el estado antiguo

export const reducer: Reducer<CounterState> = (state: CounterState | undefined, incomingAction: Action): CounterState => { //una fx que recive un estado definido por usuario, y regresa un estado
    if (state === undefined) {
        return { count: 0 };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return { count: state.count + 1 };
        case 'DECREMENT_COUNT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};


//Store como única fuente de la verdad
//El estado(State) es de solo lectura
//Los cambios se hacen por medio de acciones(actions) y funciones puras(reducers)


//https://desarrolloweb.com/articulos/que-es-redux.html