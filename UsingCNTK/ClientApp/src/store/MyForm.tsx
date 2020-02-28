import { Action, Reducer } from 'redux';
import { CounterState } from './Counter';


//En este caso tenemos una interfaz y reducer que se encargan de gestionar todo el estado de la aplicacion, 
//pero en realidad ¿Lo mejor seria tener un reducer para cada campo del formulario?
//¿Que otros elementos podrian  transformar la interfaz de usuario en lo que respecta al formulario ?

//Que otros elementos de la UI podiran darle estados diferentes a nuestro formulario?..... campo validado? ....

export interface MyFormState
{
    name: string;
    firstName: string;
    age: number;

}

//Acciones
export interface changeFormAction { type: 'CHANGEFORM' }

export type GeneralFormAction = changeFormAction;


//ActionCreator liga el tipo de accion con la funcion 
export const actionCreatorsMyForm = {
    onChangeForm: () => ({ type: 'CHANGEFORM' } as changeFormAction),
};




//Reducer recibe action y estado retornan nuevo estado para el formulario completo
export const reducerMyForm: Reducer<MyFormState> = (state: MyFormState | undefined, incomingAction: Action): MyFormState =>
{
    if (state == undefined) {
        return { name: "", firstName: "", age: null };
    }

    const action = incomingAction as GeneralFormAction;
    switch (action.type)
    {
        case 'CHANGEFORM':
            console.log("Nombre:", state.name, "Apellido " ,state.firstName, " Edad: " , state.age);
            return { name: state.name.valueOf(), firstName: state.firstName.valueOf(), age: state.age.valueOf() };

    }

}