import React, { useContext, useEffect, useState } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import Button from './Button';

const MAX_CARDS = 9;
// const MAX_PAGES = 8;
const ONE = 1;

export default function Footer({ setFirst, setLast }) {
  const { filteredData } = useContext(ChallengeContext);
  const [pagesIndex, setPagesIndex] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [firstPage, setFirstPage] = useState(1);
  const [lastPage, setLastPage] = useState(6);

  let pages = [];

  useEffect(() => {
    const definePagesIndex = () => {
      if (filteredData.length > 0) {
        for (let page = 1; page <= Math.ceil(filteredData.length / MAX_CARDS); page++) {
          pages.push(page);
          setPagesIndex(pages);
        }
        setSelectedPage(1);
        changePage(1);
      } else {
        setPagesIndex([]);
      }
    }
    definePagesIndex();
    // eslint-disable-next-line
  }, [filteredData]);

  const changePage = (page) => {
    setFirstPage(page);
    setFirst(page * MAX_CARDS - MAX_CARDS);
    if (page * MAX_CARDS - ONE >= filteredData.length) {
      setLast(filteredData.length - ONE);
    } else {
      setLast(page * MAX_CARDS - ONE);
    }
    setSelectedPage(page);
  }
  
  /* .filter((page, index) => index >= firstPage - ONE && index <= lastPage) */
  
  return pagesIndex ? (
    <footer>
      {
        pagesIndex.length !== ONE && pagesIndex
          .map((number) => (
          <Button
            key={ number }
            className={ number === selectedPage ? 'btn-page selected' : 'btn-page' }
            func={ () => changePage(number) }
            label={ number }
          />
        ))
      }
    </footer>
  ) : null;
}
