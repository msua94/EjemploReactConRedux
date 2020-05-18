import {acciones} from './acciones';

var estadoInicial = {
    valorUno: 0,
    valorDos: 0,
    resultado: 0,
};

const operacionesReducer = (state = estadoInicial, evento) =>{
    console.log(evento);
    switch(evento.type){
        case acciones.ActualizarValorUno:
            console.log(evento.valorUno);
            return {...state, valorUno: evento.valorUno};
        case acciones.ActualizarValorDos:
            return {...state, valorDos: evento.valorDos};
        case acciones.SumarValores:
            return {...state, resultado: evento.resultado};
        default: return state;
    }
};

export default operacionesReducer;