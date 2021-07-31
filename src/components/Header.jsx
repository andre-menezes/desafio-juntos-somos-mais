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
    // eslint-disable-next-line
  }, [searchInput]);
  
  return (
    <header className="header-content">
      <div>
        <img className="header-logo" src={logo} alt='Juntos Somos Mais' />
      </div>
      <form className="searchbar">
        <div>
          <img className="search-icon" src={ searchIcon } alt='Search' />
          <Input
            testid='searchbar-input'
            className="search-input"
            func={ setSearchInput }
            placeholder="Buscar aqui"
            type="text"
          />
        </div>
      </form>
    </header>
  );
};
