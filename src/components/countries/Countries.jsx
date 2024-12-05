import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import '../country/country.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/region/asia')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        const newVisitedCountry = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountry);
    }
    const handleVisitedFlags = country => {
        const newVisitedFlags = [...visitedFlags, country]
        setVisitedFlags(newVisitedFlags);
    }


    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div>
                <h4>Visited Countries: {visitedCountry.length}</h4>
                <ul>
                    {
                        visitedCountry.map(country => <li key={country.cca3}>{country.name.common} <br /><img src={country.flags.png} alt="" /></li>)
                    }
                    {
                        visitedFlags.map(country => <img src={country.flags.png} alt="" />)
                    }
                </ul>
            </div>
            <div className="grid">
                {
                    countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;