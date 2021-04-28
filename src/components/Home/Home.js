import React from "react";
import CocktailsList from "../CocktailsList/CocktailsList";
import Search from "../Search/Search";

import "./Home.scss";

export default function Home() {
  return (
    <div className="_container home">
      <Search />
      <CocktailsList />
    </div>
  );
}
