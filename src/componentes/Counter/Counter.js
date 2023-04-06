import {useReducer, useState } from "react"

const Counter = () => {
    // const [contador, setContador] = useState(0)
    const estadoInicial = {contador: 0};

    const TYPES = {
        incrementar: 'Incrementar',
        decrementar: 'Decrementar',
        incrementar2: 'Incrementar_2',
        decrementar2: 'Decrementar_2',
        resetar: 'Resetear'
    }

    const reducer = (state, action) => {    // const action = {types: TYPES, payload: 2 }
        switch (action.types){
            case TYPES.incrementar:
                return {contador: state.contador + 1};
            case TYPES.decrementar:
                return {contador : state.contador - 1};
            case TYPES.incrementar2:
                return {contador: state.contador + action.payload};
            case TYPES.decrementar2:
                return {contador: state.contador -action.payload}; 
             case TYPES.resetar:
                return estadoInicial;   
            default:
               return state.contador;
        }
    }


    const [state, dispatch] = useReducer(reducer, estadoInicial);

    const sumar = () =>dispatch({types: TYPES.incrementar});
    const restar = () => dispatch({types: TYPES.decrementar});
    const sumar2 = () =>dispatch({types: TYPES.incrementar2, payload: 2});
    const restar2 = () => dispatch({types: TYPES.decrementar2, payload: 2});
    const resetar = () => dispatch({types: TYPES.resetar})



    return (
        <div style={{textAlign: "center"}}>
            <h1>Contador</h1>

            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
                <button onClick={resetar}>Resetear</button>
                <button onClick={restar2}>-2</button>
                <button onClick={sumar2}>+2</button>

            </nav>
            <h3>{state.contador}</h3>
        </div>
     );
}

export default Counter;
