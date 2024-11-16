import React from "react";
import styled from "styled-components";
import CurrencyItem from "./CurrencyItem";

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CurrencyList = ({ currencies }) => {
  return (
    <ListWrapper>
      {currencies.map((currency) => (
        <CurrencyItem key={currency.code} {...currency} />
      ))}
    </ListWrapper>
  );
};

export default CurrencyList;
