import './App.css'; // Importa los estilos CSS globales para la aplicación.
import Boton from './componentes/Boton'; // Importa el componente Boton.
import Contador from './componentes/Contador'; // Importa el componente Contador.
import imagen1 from './imagenes/imagen1.png'; // Importa la primera imagen.
import imagen2 from './imagenes/imagen2.png'; // Importa la segunda imagen.
import imagen3 from './imagenes/imagen3.png'; // Importa la tercera imagen.
import { useState, useEffect } from 'react'; // Importa los hooks useState y useEffect de React.

const imagenes = [imagen1, imagen2, imagen3]; // Crea un arreglo que contiene todas las imágenes.

function App() {
  // Define un estado para contar el número de clics.
  const [numClics, setNumClics] = useState(0);
  
  // Define un estado para manejar el índice de la imagen actual.
  const [indiceImagen, setIndiceImagen] = useState(0);

  // Función que incrementa el número de clics.
  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  // Función que reinicia el contador de clics.
  const reiniciarContador = () => {
    setNumClics(0);
  }

  // useEffect que se ejecuta una vez cuando el componente se monta.
  useEffect(() => {
    // Configura un intervalo que cambia el índice de la imagen cada 2 segundos.
    const intervalo = setInterval(() => {
      setIndiceImagen((indiceImagen) => (indiceImagen + 1) % imagenes.length);
    }, 2000); // Cambia de imagen cada 2 segundos.

    // Limpia el intervalo cuando el componente se desmonta.
    return () => clearInterval(intervalo);
  }, []);

  // Renderiza el componente App.
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={imagenes[indiceImagen]} // Usa el índice de imagen actual para mostrar la imagen correspondiente.
          alt='Logo alternativo' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} /> {/* Renderiza el componente Contador con el número actual de clics. */}
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} /> {/* Renderiza el botón de clic y le pasa la función manejarClic. */}
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} /> {/* Renderiza el botón de reiniciar y le pasa la función reiniciarContador. */}
      </div>
    </div>
  );
}

export default App; // Exporta el componente App como el componente principal.
