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
  // const [continents, setContinents] = useState();

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

  // const isContinentCode = data.continents.sort(
  //   (continent) => continent.code === code
  //  );

  //   const isCountryCode = data.continents.countries.sort(
  //    (country) => country.code === code
  //   );
  const getContinentCode = (code) => {
    const codes = data.continents.map((continent) => continent.code);

    const [continentCode] = codes.filter((c) => c === code);

    return continentCode;
  };
  const handleSelect = (code) => {
    const continentCode = getContinentCode(code);
    console.log(continentCode);
    if (selectedContinent === code) {
      setSelectedContinent(null);
    } else if (code === continentCode) {
      setSelectedContinent(code);
    }
    if (selectedCountry === code) {
      setSelectedCountry(null);
    } else if (code !== continentCode) {
      setSelectedCountry(code);
    }
  };
  return (
    <div>
      {console.log("render")}
      {!loading ? (
        <ul className={styles.list}>
          <ListItem
            items={data.continents}
            countryContinent={data.continents.countries}
            selectedItem={{ selectedContinent, selectedCountry }}
            handleSelect={handleSelect}
          />
          {/* {data.continents.map(({ name, code, countries }) => (
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
          ))} */}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
