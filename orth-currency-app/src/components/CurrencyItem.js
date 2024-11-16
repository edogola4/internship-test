import React from "react";
import styled from "styled-components";

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

const CurrencyItem = ({ country, currency, rate, code }) => {
  //const flagUrl = `/flags/${code.toLowerCase()}.png`; // Assuming flag files are named after currency codes
  const flagUrl = `${process.env.PUBLIC_URL}/flags/${code}.png`;  // Ensure you use PUBLIC_URL


  return (
    <ItemWrapper>
      {/* Display Country Flag */}
      <Flag
        src={flagUrl}
        alt={`${country} flag`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/flags/default.png"; // Fallback to a default flag
        }}
      />
      {/* Display Country Name */}
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
