import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  const { name, flags, population, region, capital, area } = country;

  const handleVisited = () => {
    const newVisited = !visited;
    setVisited(newVisited);
    handleVisitedCountries(country, newVisited);
  };

  return (
    <div className={`country ${visited && "visited-country"}`}>
      <img src={flags.flags.png} alt="" />
      <h3>Name: {name.common}</h3>
      <p>capital: {capital.capital}</p>
      <p>Region: {region.region}</p>
      <p>Populaton: {population.population}</p>
      <p>
        Area: {area.area} {area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>{visited ? "Visited" : "Not Visited"}</button>
    </div>
  );
};

export default Country;
