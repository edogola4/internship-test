import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled components
const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

const FlagList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CurrencyItem = ({ country, currency, rate, code }) => {
  const flagUrl = `https://flagcdn.com/w320/${code.toLowerCase()}.png`;

  return (
    <ItemWrapper>
      {/* Display Country Flag */}
      <Flag
        src={flagUrl}
        alt={`${country} flag`}
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite error loops
          e.target.src = `/flags/default.png`; // Fallback to default flag
        }}
      />
      {/* Display Currency Details */}
      <Details>
        <div>{country}</div>
        <div>{currency}</div>
      </Details>
      {/* Display Exchange Rate */}
      <Rate>{rate} KES</Rate>
    </ItemWrapper>
  );
};

const CountryFlags = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        // Map over the countries to extract the needed data
        const countryData = data.map((country) => ({
          name: country.name.common,
          currency: country.currencies
            ? Object.keys(country.currencies)[0]
            : "N/A",
          rate: Math.random() * 100, // Placeholder for actual exchange rates
          code: country.cca2, // 2-letter country code for flag URL
        }));

        setCountries(countryData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <FlagList>
      {countries.length > 0 ? (
        countries.map((country) => (
          <CurrencyItem
            key={country.code}
            country={country.name}
            currency={country.currency}
            rate={country.rate}
            code={country.code}
          />
        ))
      ) : (
        <p>Loading countries...</p>
      )}
    </FlagList>
  );
};

export default CountryFlags;
