import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrencyList from './components/CurrencyList';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch('/data/fx.json')
      .then(response => response.json())
      .then(data => {
        const formattedCurrencies = Object.keys(data.KES).map(currency => ({
          code: currency,
          rate: data.KES[currency]
        }));
        setCurrencies(formattedCurrencies);
      });
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Header />
        <SearchBar currencies={currencies} />
        <Routes>
          <Route path="/" element={<CurrencyList currencies={currencies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;