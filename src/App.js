import React from 'react';
import Carousel from '../src/carousel';
import imagen1 from './assets/imagen1.jpeg';
import imagen3 from './assets/imagen3.jpeg';
import './App.css';

const images = [
  { src: imagen1, alt: 'Imagen 1', title: 'Mejores amigos', description: 'Paseo con todos!' },
  { src: imagen3, alt: 'Imagen 2', title: 'El más juguetón', description: 'Ron es el gato más divertido' },
  { src: imagen1, alt: 'Imagen 2', title: 'El más pequeño', description: 'Juan es el más pequeño de todos, tiene solo 1 año' },
  { src: imagen3, alt: 'Imagen 2', title: 'El más juguetón', description: 'Ron es el gato más divertido' },
];

function App() {
  return (
    <div className="App">
      <Carousel images={images} />
    </div>
  );
}

export default App;