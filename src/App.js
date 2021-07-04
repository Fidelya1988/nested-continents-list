import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "./api/queries/continents";
import styles from "./app.module.css";
import Loader from "./components/Loader/Loader";
import ListItem from "./components/ListItem/ListItem";
function App() {
  const { data, loading, error } = useQuery(GET_CONTINENTS);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleContinentSelect = (code) => {
    if (selectedContinent === code) {
      setSelectedContinent(null);
    } else {
      setSelectedContinent(code);
    }
  };

  const handleCountrySelect = (code) => {
    if (selectedCountry === code) {
      setSelectedCountry(null);
    } else {
      setSelectedCountry(code);
    }
  };

  return (
    <div>
      {console.log("render")}
      {!loading ? (
        <ul className={styles.list}>
          <ListItem items={data.continents} />
          {data.continents.map(({ name, code, countries }) => (
            <li
              key={code}
              className={selectedContinent === code ? styles.selected : ""}
            >
              <p onClick={() => handleContinentSelect(code)}>{name}</p>
              {selectedContinent === code && (
                <ul>
                  {countries.map((country) => (
                    <li
                      key={country.code}
                      onClick={() => handleCountrySelect(country.code)}
                    >
                      <p>{country.name}</p>
                      {selectedCountry === country.code && (
                        <ul>
                          {country.languages?.map((language) => (
                            <li key={language.code}>{language.name}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
