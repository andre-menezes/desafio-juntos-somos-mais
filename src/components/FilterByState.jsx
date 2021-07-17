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
  const [stateName, setStateName] = useState('');
  const [checked, setChecked] = useState(false);


  // fetch da API dos Estados
  useEffect(() => {
    const getFederatedUnits = async () => {
      const response = await fetchFederatedUnits();
      setFederatedUnits(response);
    }
    getFederatedUnits();
    // eslint-disable-next-line
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
    // eslint-disable-next-line
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
    // eslint-disable-next-line
  }, [stateName, checked])

  return (
    <form className="form-content">
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