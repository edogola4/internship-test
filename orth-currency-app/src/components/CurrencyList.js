import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CurrencyItem from "./CurrencyItem";

// Styled components
const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const EmptyMessage = styled.div`
  padding: 1rem;
  text-align: center;
  color: #555;
  font-size: 1rem;
`;

const CurrencyList = ({ currencies }) => {
  if (!currencies || currencies.length === 0) {
    return <EmptyMessage>No currencies available to display.</EmptyMessage>;
  }

  return (
    <ListWrapper>
      {currencies.map((currency) => (
        <CurrencyItem key={currency.code} {...currency} />
      ))}
    </ListWrapper>
  );
};

// Prop validation
CurrencyList.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    })
  ),
};

CurrencyList.defaultProps = {
  currencies: [],
};

export default CurrencyList;