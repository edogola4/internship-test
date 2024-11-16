import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrencyList from "./components/CurrencyList";
import rawFxData from "./data/fx.json"; // Updated JSON file

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const parsedCurrencies = rawFxData.fx
      .filter((item) => item.currency && item.nameI18N && item.exchangeRate) // Filter valid records
      .map((item) => ({
        country: item.nameI18N,
        currency: item.currency,
        rate: item.exchangeRate.middle, // Use "middle" rate for display
        code: item.currency.toLowerCase(), // Map to lowercase for flag file naming
      }));
    setCurrencies(parsedCurrencies);
  }, []);

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
    window.location.hash = term; // Update URL hash for deep linking
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1); // Get hash without `#`
    if (hash) setSearchTerm(hash);
  }, []);

  const filteredCurrencies = currencies.filter(({ currency, country }) =>
    `${currency} ${country}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <SearchBar searchTerm={searchTerm} onSearch={updateSearchTerm} />
      <CurrencyList currencies={filteredCurrencies} />
    </div>
  );
};

export default App;
