import { React } from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from './App';
import userEvent from '@testing-library/user-event';

// it('deve renderizar o componente App', () => {
//   renderWithRouter(<App />);
//   const homeTitle = screen.getByRole('heading', {
//     name: 'Você está na página Início',
//   });
//   expect(homeTitle).toBeInTheDocument();
// });

it('deve renderizar o componente Sobre', () => {
  const { history } = renderWithRouter(<App />);
  const aboutLink = screen.getByRole('link', { name: 'Sobre' });
  expect(aboutLink).toBeInTheDocument();
  userEvent.click(aboutLink);
  
  // console.log(history);
  const { pathname } = history.location;
  expect(pathname).toBe('/about');
});