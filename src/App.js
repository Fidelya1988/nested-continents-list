import React, { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "./api/queries/continents";
import styles from "./app.module.css";
import Loader from "./components/Loader/Loader";
import ListItem from "./components/ListItem/ListItem";
import { HelpersContext } from ".";
function App() {
  const { data, loading } = useQuery(GET_CONTINENTS);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { getItemCode } = useContext(HelpersContext);

  const handleSelect = (code) => {
    const continentCode = getItemCode(code, data.continents);

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
