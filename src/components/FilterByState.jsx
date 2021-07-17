import React, { useContext, useEffect, useState } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import { fetchFederatedUnits } from '../services';
import Input from './Input';

export default function FilterByState() {
  const {
    data,
    federatedUnits,
    filterByState,
    setFederatedUnits,
    setFilterByState,
    setFilteredData,
  } = useContext(ChallengeContext);
  const [isFetching, setIsFetching] = useState(true);
  const [stateName, setStateName] = useState('');
  const [checked, setChecked] = useState(false);


  // fetch da API dos Estados
  useEffect(() => {
    const getFederatedUnits = async () => {
      setIsFetching(true);
      const response = await fetchFederatedUnits();
      setFederatedUnits(response);
      setIsFetching(false);
    }
    getFederatedUnits();
  }, []);

  // Filtro por Estado
  useEffect(() => {
    const filterByFederatedUnits = () => {
      let filteredByState = [];
      if (filterByState.length) {
        filterByState.forEach((state) => {
          filteredByState = [
            ...filteredByState,
            data.filter((item) => item.location.state.includes(state)),
          ]
        })
      }
      if (!filterByState.length) {
        setFilteredData(data);
      } else {
        setFilteredData(filteredByState.flat());
      }
    };
    filterByFederatedUnits();
  }, [filterByState]);

  useEffect(() => {
    const addStateFilter = () => {
      if (checked) {
        setFilterByState([...filterByState, stateName])
      } else {
        setStateName('');
        setFilterByState(filterByState.filter((item) => item !== stateName));
      }
    }
    addStateFilter();
  }, [stateName, checked])

  return isFetching ? <p>Loading</p> : (
    <form>
      {federatedUnits.map(({ nome, id }) => (
        <label htmlFor="uf" key={ id }>
          <Input
            setChecked={ setChecked }
            func={ setStateName }
            name="uf"
            type="checkbox"
            value={ nome }
          />
          {nome}
        </label>
      ))}
    </form>
  )
}