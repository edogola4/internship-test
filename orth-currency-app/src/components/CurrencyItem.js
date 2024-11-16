import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 1rem;
`;

const Flag = styled.img`
  width: 40px;
  height: 30px;
  object-fit: cover;
`;

const CurrencyItem = ({ country, currency, rate, code }) => {
  const flagUrl = `/flags/${code}.png`; // Assuming flag files are named after currency codes

  return (
    <ItemWrapper>
      <Flag src={flagUrl} alt={`${country} flag`} />
      <div>{country}</div>
      <div>{currency}</div>
      <div>{rate.toFixed(2)}</div>
    </ItemWrapper>
  );
};

export default CurrencyItem;
