import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CurrencyList from './components/CurrencyList'; // Adjust the path if necessary


const SearchContainer = styled.div`
  position: sticky;
  top: 0;
  background: white;
  z-index: 101;
  padding: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
`;

const SearchBar = ({ currencies }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (location.hash) {
      setSearchTerm(location.hash.slice(1));
    }
  }, [location.hash]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    navigate({ hash: `#${e.target.value}` });
  };

  const filteredCurrencies = currencies.filter(currency => 
    currency.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SearchContainer>
      <SearchInput 
        type="text" 
        placeholder="Search currency" 
        value={searchTerm} 
        onChange={handleSearch} 
      />
      <CurrencyList currencies={filteredCurrencies} />
    </SearchContainer>
  );
};

export default SearchBar;