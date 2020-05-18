import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pantalla from './EjemploRedux/Pantalla';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Pantalla />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
