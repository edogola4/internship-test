import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const FlagImage = styled.img`
  width: 30px;
  height: 20px;
  margin-right: 10px;
`;

const CurrencyInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CurrencyItem = ({ currency }) => (
  <ItemContainer>
    <FlagImage src={`/flags/${currency.code.toLowerCase()}.png`} alt={`${currency.code} flag`} />
    <CurrencyInfo>
      <span>{currency.code}</span>
      <span>Rate: {currency.rate}</span>
    </CurrencyInfo>
  </ItemContainer>
);

export default CurrencyItem;