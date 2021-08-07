import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from '../context/ChallengeContext';
import userEvent from '@testing-library/user-event';
import App from '../App';
import testData from './testData';

describe('1 - Testando o componente "Header"', () => {
  
  it('Verifica se há um input de texto para pesquisa', () => {
    render(<Provider><App /></Provider>);
    const searchBar = screen.getByTestId('searchbar-input');
    expect(searchBar).toBeInTheDocument();
    expect(searchBar.tagName).toBe('INPUT');
  });
  
  it('Verifica se armazena o texto "Alejandra Rodrigues" no input', () => {
    render(<Provider><App /></Provider>);
    const searchBar = screen.getByTestId('searchbar-input');
    userEvent.type(searchBar, 'Alejandra Rodrigues');
    expect(searchBar).toHaveValue('Alejandra Rodrigues');
  });
});

describe('2 - Testando o componente "CardList"', () => {
  it('Verifica se aparece a imagem de loading antes de carregar a lista de membros', async () => {
    render(<Provider><App /></Provider>);
    const loadingImage = screen.getByAltText(/loading/i);
    expect(loadingImage).toBeInTheDocument();
  });
  
  it('Verifica se renderiza os cards', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      new Promise((resolve, reject) => {
        resolve(Promise.resolve({
          json: Promise.resolve(testData)
        }));
        reject(console.log('erro'));
      })
     )
    render(<Provider><App /></Provider>);
    expect(screen.getByTestId('card-list-section')).toBeInTheDocument();
  })
});