import React, { useContext, useEffect, useState } from 'react';
import logo from '../images/logo.svg';
import Card from './Card';
import { ChallengeContext } from '../context/ChallengeContext';
import { fetchApi } from '../services';
import Footer from './Footer';

const ONE = 1;

export default function CardList() {
  const [isFetching, setIsFetching] = useState(true);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(8);
  const {
    filteredData,
    setData,
    setFilteredData,
    pagesNumber,
  } = useContext(ChallengeContext);

  
  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      const response = await fetchApi();
      setData(response);
      setFilteredData(response);
      setIsFetching(false);
    }

    getData();
    // eslint-disable-next-line
  }, []);
  
  return  isFetching ? <img src={ logo } alt="Juntos Somos Mais" /> : filteredData && (
    <section>
      <header className="members-header">
        <div>
          {`Exibindo ${filteredData.length === 0 ? first : first + ONE} - ${last >= filteredData.length
            ? filteredData.length : last + ONE} de ${filteredData.length}`}
        </div>
      </header>
      <div className="card-list">
      {
        filteredData
          .filter((card, index) => index > first - ONE && index <= last)
          .map(({ email, location, name, picture }) => (
          <Card
            key={ email }
            location={ location }
            name={ name }
            pagesNumber={ pagesNumber }
            picture={ picture }
          />
        ))}
      </div>
      <Footer setFirst={ setFirst } setLast={ setLast } />
    </section>
  );
};
