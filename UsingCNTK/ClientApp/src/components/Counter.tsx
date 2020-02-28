import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as CounterStore from '../store/Counter';

type CounterProps =
    CounterStore.CounterState &
    typeof CounterStore.actionCreators &
    RouteComponentProps<{}>;

class Counter extends React.PureComponent<CounterProps> { // reduce el número de operaciones de renderizado PureComponent cambia el método del ciclo de vida shouldComponentUpdatey agrega algo de lógica para verificar automáticamente si se requiere una nueva representación para el componente. 
    public render() {
        return (
            <React.Fragment> { /*elemento que se retorna una lsita de elementos y no provoca problemas de DOM */} 
                <h1>Counter</h1>

                <p>This is a simple example of a React component.</p>

                <p aria-live="polite">Current count: <strong>{this.props.count}</strong></p>  { /* Props contenidas desde el componente padre */} 

                <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => { this.props.increment(); }}> {/* Se llama al action  del store  */}
                    Increment
                </button>
            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.counter, //recibe un estado , 
    CounterStore.actionCreators
)(Counter);

//Estructura del Componente: 
//un componenete puro ( ahorra renders al tener el isupdaterenderneeded())