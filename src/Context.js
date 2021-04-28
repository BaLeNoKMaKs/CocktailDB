import React, { useState, useEffect } from "react";

const MainContext = React.createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export default function Context({ children }) {
  const [listDrinks, setListDrinks] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const response = await fetch(`${url}${search}`)
      .then((response) => response.json())
      .then((data) => data.drinks);

    if (response) {
      const drinks = await response.map((drink) => {
        const {
          idDrink,
          strDrink,
          strDrinkThumb,
          strAlcoholic,
          strGlass,
        } = drink;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          alcoholic: strAlcoholic,
          glass: strGlass,
        };
      });
      await setListDrinks(drinks);
    } else {
      setListDrinks([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <MainContext.Provider
      value={{
        search,
        setSearch,
        listDrinks,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export function useGlobalContext() {
  return React.useContext(MainContext);
}
