import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { fetchApi, fetchFederatedUnits } from '../services';

const ChallengeContext = createContext();

export function ChallengeProvider({ children }) {
  const [data, setData] = useState([]);
  const [federatedUnits, setFederatedUnits] = useState([]);
  const [filterByState, setFilterByState] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
  const context = {
    data,
    setData,
    federatedUnits,
    setFederatedUnits,
    filterByState,
    setFilterByState,
    filteredData,
    setFilteredData,
  };

  return (
    <ChallengeContext.Provider value={ context }>
      {children}
    </ChallengeContext.Provider>
  )
};

ChallengeContext.propTypes = { children: PropTypes.node.isRequired };

export { ChallengeContext, ChallengeProvider as Provider };
