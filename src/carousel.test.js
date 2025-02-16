import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './carousel';

const images = [
  { src: 'image1.jpg', alt: 'Imagen 1', title: 'Título 1', description: 'Descripción 1' },
  { src: 'image2.jpg', alt: 'Imagen 2', title: 'Título 2', description: 'Descripción 2' },
];

test('renders carousel with images, title, and description', () => {
  render(<Carousel images={images} />);
  expect(screen.getByRole('img', { name: 'Imagen 1' })).toBeVisible();
  expect(screen.getByRole('heading', { name: 'Título 1' })).toBeVisible();
  expect(screen.getByText('Descripción 1')).toBeVisible();
});

test('navigates to the next image when clicking "Siguiente"', () => {
  render(<Carousel images={images} />);
  fireEvent.click(screen.getByText('Siguiente'));
  expect(screen.getByRole('img', { name: 'Imagen 2' })).toBeVisible();
});

test('navigates to the previous image when clicking "Anterior"', () => {
  render(<Carousel images={images} />);
  fireEvent.click(screen.getByText('Anterior'));
  expect(screen.getByRole('img', { name: 'Imagen 2' })).toBeVisible();
});