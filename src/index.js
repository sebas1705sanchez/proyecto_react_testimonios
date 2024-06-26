import React from 'react';// componentes esenciales de react 
import ReactDOM from 'react-dom/client'; // libreria que nos permite manejar el DOM
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // crea el root que es el responsable de renderizar la aplicacion
root.render(
  <React.StrictMode> 
    <App /> 
  </React.StrictMode>// ayuda a identificar problemas 
);

// renderizar se refiere a convertir el codigo de los componentes react en elementos HTML


/*
es el punto de entrada de la aplicacion. renderiza el componente App.
*/