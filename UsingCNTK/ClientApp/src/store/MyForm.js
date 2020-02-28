"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ActionCreator liga el tipo de accion con la funcion 
exports.actionCreatorsMyForm = {
    onChangeForm: function () { return ({ type: 'CHANGEFORM' }); },
};
//Reducer recibe action y estado retornan nuevo estado para el formulario completo
exports.reducerMyForm = function (state, incomingAction) {
    if (state == undefined) {
        return { name: "", firstName: "", age: null };
    }
    var action = incomingAction;
    switch (action.type) {
        case 'CHANGEFORM':
            console.log("Nombre:", state.name, "Apellido ", state.firstName, " Edad: ", state.age);
            return { name: state.name.valueOf(), firstName: state.firstName.valueOf(), age: state.age.valueOf() };
    }
};
//# sourceMappingURL=MyForm.js.map