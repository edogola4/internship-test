import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrencyList from "./components/CurrencyList";
import rawFxData from "./data/fx.json"; // Updated JSON file
import "./App.css";


const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);

  // Parse and load currency data on mount
  useEffect(() => {
    try {
      const parsedCurrencies = rawFxData.fx
        .filter(
          (item) => item.currency && item.nameI18N && item.exchangeRate?.middle
        ) // Filter valid records
        .map((item) => ({
          country: item.nameI18N,
          currency: item.currency,
          rate: item.exchangeRate.middle, // Use "middle" rate for display
          code: item.currency.toLowerCase(), // Map to lowercase for flag file naming
        }));
      setCurrencies(parsedCurrencies);
    } catch (error) {
      console.error("Error loading currency data:", error);
    }
  }, []);

  // Update URL hash and search term
  const updateSearchTerm = (term) => {
    setSearchTerm(term);
    window.location.hash = encodeURIComponent(term); // Update URL hash for deep linking
  };

  // Load initial search term from URL hash
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1)); // Get hash without `#`
    if (hash) setSearchTerm(hash);
  }, []);

  // Filter currencies based on the search term with debounce
  useEffect(() => {
    const timeout = setTimeout(() => {
      const filtered = currencies.filter(({ currency, country }) =>
        `${currency} ${country}`.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCurrencies(filtered);
    }, 300); // Debounce search for 300ms
    return () => clearTimeout(timeout);
  }, [searchTerm, currencies]);

  // Dynamically update document title
  useEffect(() => {
    document.title = searchTerm
      ? `Search: ${searchTerm} | Currency Exchange`
      : "Currency Exchange Rates";
  }, [searchTerm]);

  return (
    <div>
      <Header />
      <SearchBar searchTerm={searchTerm} onSearch={updateSearchTerm} />
      <main>
        {filteredCurrencies.length > 0 ? (
          <CurrencyList currencies={filteredCurrencies} />
        ) : (
          <p style={{ textAlign: "center", margin: "2rem" }}>
            No currencies found. Try a different search term.
          </p>
        )}
      </main>
    </div>
  );
};

export default App;
