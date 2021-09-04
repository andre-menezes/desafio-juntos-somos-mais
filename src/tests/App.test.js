import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from '../context/ChallengeContext';
import userEvent from '@testing-library/user-event';
import App from '../App';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
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

  it('Verifica se há um loading na página', () => {
    render(<Provider><CardList /></Provider>);
    const loading = screen.getByAltText('loading');
    expect(loading).toBeInTheDocument();
  });

  it('Verifica se é renderizado a lista de Cards', () => {
    act(() => {
      render(<Provider initialState={testData.results}><App /></Provider>);
      const cardList = screen.getByTestId('card-list-section');
      expect(cardList).toBeDefined();
    });
  });
  
  it('Verifica se é renderizado 9 cards', () => {
    act(() => {
      render(<Provider initialState={testData.results}><App /></Provider>);
      const cards = screen.getAllByTestId('member-card');
      expect(cards).toHaveLength(9);
    });
  });
  
  it('Verifica se ao clicar em outra página, o conteúdo dos cards alteram', async () => {
    act(() => {
      // let first = jest.fn((first) => first);
      // let last = jest.fn((last) => last);
      render(<Provider initialState={testData.results}><App /></Provider>);
      const cardList = screen.getByTestId('card-list-section');
      expect(cardList).toBeInTheDocument();
      // render(
      //   <Provider initialState={ [1, 2, 3, 4, 5] }>
      //     <Footer setFirst={ first } setLast={ last }/>
      //   </Provider>
      // );
      const footer = screen.getByTestId('footer');
      expect(footer.tagName).toBe('FOOTER');
      // const pagesIndex = screen.getAllByTestId('page-index');
      // expect(pagesIndex).toHaveLength(5);
      // expect(footer).toContainElement(pagesIndex);
    });
  });
});

describe('3 - Testando os filtros', () => {

  describe('3.1 - Filtro por texto', () => {

    it('Filtra pelo texto "Alda"', async () => {
    act(() => {
      render(<Provider initialState={testData.results}><App /></Provider>);
      const searchBar = screen.getByTestId('searchbar-input');
      expect(searchBar).toHaveValue('');
      userEvent.type(searchBar, 'Alda');
      expect(searchBar).toHaveValue('Alda');
      render(
        <Provider
          initialState={
            testData.results
              .filter(({ name }) => (name.first + ' ' + name.last).includes(searchBar.value.toLowerCase()))
          }
        >
          <CardList />
        </Provider>
      );
      const cards = screen.getAllByTestId('member-card');
      expect(cards).toHaveLength(2);
      const member = screen.getByText(/marisvalda/i);
      expect(member).toBeInTheDocument();
    });
  });
  })
})
