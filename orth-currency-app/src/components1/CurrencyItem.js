import React from 'react';

function CurrencyItem({ flag, country, currency, rate }) {
  return (
    <div className="currency-item">
      <img src={flag} alt={`${country} flag`} />
      <span>{country}</span>
      <span>{currency}</span>
      <span>{rate}</span>
    </div>
  );
}

export default CurrencyItem;
