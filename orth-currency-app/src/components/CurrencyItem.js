import React from "react";
import styled from "styled-components";

// Styled components
const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 1rem;
  gap: 1rem;
`;

const Flag = styled.img`
  width: 40px;
  height: 30px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const Rate = styled.div`
  font-weight: bold;
  color: #007bff;
`;

// CurrencyItem component
const CurrencyItem = ({ country, currency, rate, code }) => {
   const flagUrl = `${process.env.PUBLIC_URL}/flags/${code.toLowerCase()}.png`;
   //const flagUrl = `${window.location.origin}/flags/${code.toLowerCase()}.png`;
  //const flagUrl = `${process.env.PUBLIC_URL}/flags/${code}.png`; 


  return (
    <ItemWrapper>
      {/* Display Country Flag */}
      <Flag
        src={flagUrl}
        alt={`${country} flag`}
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite error loops
          e.target.src = `${process.env.PUBLIC_URL}/flags/default.png`; // Fallback to default flag
        }}
      />
      {/* Display Currency Details */}
      <Details>
        <div>{country}</div>
        <div>{currency}</div>
      </Details>
      {/* Display Exchange Rate */}
      <Rate>{rate.toFixed(2)} KES</Rate>
    </ItemWrapper>
  );
};

export default CurrencyItem;
