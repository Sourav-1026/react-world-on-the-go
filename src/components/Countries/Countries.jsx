import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country, isVisited) => {
    if (isVisited) {
      const newCountries = [...visitedCountries, country];
      setVisitedCountries(newCountries);
    } else {
      const remaining = visitedCountries.filter((c) => c.ccn3.ccn3 !== country.ccn3.ccn3);
      setVisitedCountries(remaining);
    }
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <h3>In the countries: {countries.length}</h3>
      <h4>The number of countries visited: {visitedCountries.length}</h4>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.ccn3.ccn3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
