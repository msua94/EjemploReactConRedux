import React, {Component} from 'react';
import IngresoDatos from './Componentes/IngresoDatos';
import OperacionDatos from './Componentes/OperacionDatos';
import {Provider} from 'react-redux';
import store from './Estado/store'

const Pantalla = (props) => {
    return (
        <div className = "container">
            <br/>
            <h3>Sumar valores con redux</h3>

            <Provider store={store}>
                <IngresoDatos/>
            </Provider>

            <Provider store={store}>
                <OperacionDatos/>
            </Provider>
            
        </div>
    );
}

export default Pantalla;