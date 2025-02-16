import { render, screen } from '@testing-library/react';
import App from './App';

test('Renderiza el componente App y muestra el carrusel', () => {
    render(<App />);

    expect(screen.getByText(/Mejores amigos/i)).toBeInTheDocument();

    const imgElement = screen.getByAltText(/Imagen 1/i);
    expect(imgElement).toBeInTheDocument();
});
