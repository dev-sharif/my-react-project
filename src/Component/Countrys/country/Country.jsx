const Country = ({ country }) => {
    const {name, flags, population, region, capital} = country;
    return (
        <div className=" border-2 border-gray-300 rounded-md p-4 hover:border-gray-500 transition-all">
            <img className="w-96 h-64 object-cover" src={flags.png} alt={name.common} />
            <h1>Name: {name.common}</h1>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
            
        </div>
    );
};

export default Country;