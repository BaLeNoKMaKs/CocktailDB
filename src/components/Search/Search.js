import React from "react";
import "./Search.scss";

import { useGlobalContext } from "../../Context";

export default function Search() {
  const { setSearch, search } = useGlobalContext();
  return (
    <div className="search">
      <div className="search__title">Search Your Favorite Cocktail</div>
      <input
        type="text"
        className="search__input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
