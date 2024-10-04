import { useState, useEffect } from 'react';
import Country from './country/Country';

const Countrys = () => {
    const [countries, setCountries] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    const displayedCountries = showAll ? countries : countries.slice(0, 15);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4 py-12 gap-4">
                {
                    displayedCountries.map((country) => (
                        <Country 
                            key={country.cca3} 
                            country={country} 
                        />
                    ))
                }
            </div>
            {countries.length > 15 && !showAll && (
                <div className="text-center mt-4">
                    <button 
                        onClick={() => setShowAll(true)}
                        className="w-48 h-10 my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
                    >
                        Show All Countries
                    </button>
                </div>
            )}
        </div>
    );
};

export default Countrys;