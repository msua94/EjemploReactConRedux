import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ActualizaValorUno,ActualizaValorDos} from '../Estado/acciones';

export const IngresoDatos = (props)=>{

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Valor</span>
                        </div>
                        <input type="number"
                               className="form-control"
                               placeholder="Ingrese el primer valor"
                               aria-label="valor1"
                               aria-describedby="basic-addon1"
                               value = {props.operaciones.valorUno}
                               onChange = {props.ActualizaValorUno}/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon2">Valor</span>
                        </div>
                        <input type="text"
                               className="form-control"
                               placeholder="Ingrese el segundo valor"
                               aria-label="valor2"
                               aria-describedby="basic-addon1"
                               value = {props.operaciones.valorDos}
                               onChange = {props.ActualizaValorDos}/>
                    </div>
                </div>
            </div>

        </div>

    );

}

const MapearEstadoAProps = (state) =>{
    return {
        operaciones: state.operaciones
    };
};

const MapearEventosAProps = (dispatch) => {

    return {
        ActualizaValorUno: (e)=>dispatch(ActualizaValorUno(e.target.value)),
        ActualizaValorDos: (e)=>dispatch(ActualizaValorDos(e.target.value))
    }

}

export default connect(MapearEstadoAProps, MapearEventosAProps)(IngresoDatos);