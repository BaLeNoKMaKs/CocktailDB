import React from "react";
import "./CocktailsList.scss";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../Context";

export default function CocktailsList() {
  const { listDrinks } = useGlobalContext();
  return (
    <div className="cards">
      {listDrinks.length > 0 ? (
        listDrinks.map((drink) => {
          const { id, name, image, glass, alcoholic } = drink;
          return (
            <div key={id} className="cards__item">
              <div className="cards__item-img">
                <img src={image} alt="" />
              </div>
              <div className="cards__item-info">
                <h4 className="cards__item-title">{name}</h4>
                <div className="cards__item-glass">{glass}</div>
                <div className="cards__item-alcoholic">{alcoholic}</div>
                <Link to={`/cocktail/${id}`} className="cards__item-btn">
                  Details
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <div className="matches">No search terms were matched</div>
      )}
    </div>
  );
}
