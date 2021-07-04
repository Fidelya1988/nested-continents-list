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
 
      {!loading ? (
        <ul className={styles.list}>
          <ListItem
            items={data.continents}
            countryContinent={data.continents.countries}
            selectedItem={{ selectedContinent, selectedCountry }}
            handleSelect={handleSelect}
          />
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
