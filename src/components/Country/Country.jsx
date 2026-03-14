import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);
  const { name, flags, population, region, capital, area } = country;
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited-country"}`}>
      <img src={flags.flags.png} alt="" srcset="" />
      <h3>Name: {name.common}</h3>
      <p>capital: {capital.capital}</p>
      <p>Region: {region.region}</p>
      <p>Populaton: {population.population}</p>
      <p>
        Area: {area.area} {area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      {/* <h3>Name: {name.official}</h3> */}
      <button onClick={handleVisited}>{visited ? "Visited" : "Not Visited"}</button>
    </div>
  );
};

export default Country;
