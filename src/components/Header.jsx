import React, { useContext, useEffect, useState } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import Input from './Input';
import logo from '../images/logo.svg'
import searchIcon from '../images/search-icon.svg';

export default function Header() {
  const {
    data,
    filteredData,
    setFilteredData,
  } = useContext(ChallengeContext);
  const [searchInput, setSearchInput] = useState('');
  
// Filtro por Texto
  useEffect(() => {
    const filterByText = () => {
      const filtered = filteredData.filter(({ name: { first, last } }) => {
        const fullName = `${first} ${last}`;
        return fullName.toUpperCase().includes(searchInput.toUpperCase());
      });
      if (searchInput.length > 0) {
        setFilteredData(filtered);
      } else {
        setFilteredData(data);
      }
    };
    filterByText();
  }, [searchInput]);
  
  return (
    <header>
      <div>
        <img width="100" src={logo} alt='Juntos Somos Mais' />
      </div>
      <form>
        <div>
          <img src={ searchIcon } alt='Search' />
          <Input
            func={ setSearchInput }
            placeholder="Buscar aqui"
            type="text"
          />
        </div>
      </form>
    </header>
  );
};
