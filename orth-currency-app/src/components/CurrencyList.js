import React from 'react';
import CurrencyItem from './CurrencyItem';
//import CurrencyList from '../CurrencyList';  // Adjust path accordingly
import styled from 'styled-components';

const ListContainer = styled.div`
  padding: 20px;
`;

const CurrencyList = ({ currencies }) => {
  return (
    <ListContainer>
      {currencies.map(currency => (
        <CurrencyItem key={currency.code} currency={currency} />
      ))}
    </ListContainer>
  );
};

export default CurrencyList;