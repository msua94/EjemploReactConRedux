import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SumaValores} from '../Estado/acciones';

export const OperacionDatos = (props)=>{

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <button type="button"
                            className="btn btn-primary"
                            onClick={()=>{props.SumaValores(props.operaciones.valorUno,props.operaciones.valorDos)}}>
                        Sumar
                    </button>
                </div>
                <div className="col-8">
                    <p>{props.operaciones.resultado}</p>
                </div>
            </div>
        </div>

    );
}

const MapearEstadoAProps = (state) =>{
    return { operaciones: state.operaciones};
};

const MapearEventosAProps = (dispatch) => {
    return {
        SumaValores: (v1,v2)=>dispatch(SumaValores(v1,v2))
    }
}

export default connect(MapearEstadoAProps, MapearEventosAProps)(OperacionDatos);