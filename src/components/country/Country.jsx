
import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, area, population} = country;
    const [visited, setVisited]= useState(false);
    const handleVisited = () =>{
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited?'visited':'notvisited'}`}>
            <h3 style={{color: visited?'purple':'white'}}>Name: {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area} </p>
            <button onClick={() =>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country)}>Visited country Flags</button>
            <br />
            <button onClick={handleVisited}>{visited ?'visited':'Going'} </button>
            {visited ? 'I have visited this country.': 'I want to visit this country.'}
        </div>
    );
};

export default Country;