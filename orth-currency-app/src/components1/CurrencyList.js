import React, { useState, useEffect } from 'react';

function CurrencyList() {
    const [currencyData, setCurrencyData] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('/fx.json') // Assuming fx.json is in the public folder
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCurrencyData(data);
                setError(null);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Data is not loaded correctly.');
            });
    }, []);

    const filteredData = currencyData.filter(currency =>
        currency.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search by country"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {filteredData.map((currency, index) => (
                        <li key={index}>
                            {currency.country}: {currency.currency} ({currency.code}) - {currency.rate}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CurrencyList;
