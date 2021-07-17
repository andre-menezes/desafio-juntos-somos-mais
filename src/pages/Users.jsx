import React, { useContext, useState } from 'react';
import CardList from '../components/CardList';
import FilterByState from '../components/FilterByState';
import { ChallengeContext } from '../context/ChallengeContext';
import arrow from '../images/arrow.png';

export default function Users() {
  const { filteredData } = useContext(ChallengeContext);
  const [hidden, setHidden] = useState(true);
  
  return (
    <main className="content">
      <aside className="filter-content">
        <div className="filter-header">
          <span>Filtros</span>
          <button
            type="button"
            onClick={ () => hidden ? setHidden(false) : setHidden(true) }
          >
            <img src={arrow} alt="icon" className={ hidden ? 'arrow' : "arrow down"} />
          </button>
        </div>
        <div className={ hidden ? 'filters' : "filters show"} >
          <h2 className="subtitle">Por Estado</h2>
          <FilterByState />
        </div>
      </aside>
      <h1 className="title">Lista de Membros</h1>
      <CardList data={ filteredData } />
    </main>
  );
};
