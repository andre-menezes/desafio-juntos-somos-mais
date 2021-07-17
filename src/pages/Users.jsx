import React, { useContext } from 'react';
import CardList from '../components/CardList';
import FilterByState from '../components/FilterByState';
import { ChallengeContext } from '../context/ChallengeContext';

export default function Users() {
  const { data, filteredData } = useContext(ChallengeContext);
  return (
    <main>
      <h1>Lista de Membros</h1>
      <aside>
        <h2>Por Estado</h2>
        <FilterByState />
      </aside>
      {filteredData === ''
        ? <CardList data={data} />
        : <CardList data={filteredData} />}
    </main>
  );
};
