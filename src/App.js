import './App.css';
import Testimonio from './componentes/Testimonio';

function App() { //devuelve el JSX
  return (
    <div className="App">
      <header className="header-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp</h1>
      </header>
      <div className="contenedor-principal">
        <Testimonio 
          nombre="Shawn Wang"
          pais="Singapur"
          imagen='hombre'
          cargo="Ingeniero de Software"
          empresa="Amazon"
          testimonio="Siempre ha sido un placer aprender React. Aprendí a programar en el moteur de Google, por supuesto."
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="mujer"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio="freeCodeCamp fue la mejor introducción a la programación de videojuegos de la historia."
        />
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="hombre"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Siempre ha sido un placer aprender React. Aprendí a programar en el moteur de Google, por supuesto."
        />
      </div>
    </div>
  );
}

export default App;
