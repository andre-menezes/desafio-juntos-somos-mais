import React, { useContext, useEffect, useState } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import Input from './Input';

export default function FilterByState() {
  const {
    data,
    filterByState,
    setFilteredData,
    setFilterByState,
  } = useContext(ChallengeContext);
  const [stateName, setStateName] = useState('');
  const [checked, setChecked] = useState(false);
  const federatedUnits = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
  ]


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
      {federatedUnits.map((state) => (
        <label htmlFor="uf" key={ state }>
          <Input
            setChecked={ setChecked }
            func={ setStateName }
            name="uf"
            type="checkbox"
            value={ state }
          />
          {state}
        </label>
      ))}
    </form>
  )
}