import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ChallengeContext = createContext();

export function ChallengeProvider({ children, initialState = [] }) {

  const [data, setData] = useState([]);
  const [filterByState, setFilterByState] = useState([]);
  const [filteredData, setFilteredData] = useState(initialState);
  
  const context = {
    data,
    setData,
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
