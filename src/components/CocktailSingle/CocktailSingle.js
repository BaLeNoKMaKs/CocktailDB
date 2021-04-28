import React from "react";

import "./CocktailSingle.scss";

import { Link, useParams } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export default function CocktailSingle() {
  const [isFetchOk, setIsFetchOk] = React.useState(false);
  const [data, setData] = React.useState({});

  const { id } = useParams("id");
  const fetchData = async () => {
    try {
      const response = await fetch(`${url}${id}`)
        .then((response) => response.json())
        .then((data) => data.drinks[0]);

      const {
        strDrinkThumb: image,
        strDrink: name,
        strAlcoholic: alco,
        strGlass: glass,
        strCategory: category,
        strInstructions: instructions,
        strIngredient1: ing1,
        strIngredient2: ing2,
        strIngredient3: ing3,
        strIngredient4: ing4,
        strIngredient5: ing5,
      } = await response;

      const data = await {
        name,
        instructions,
        image,
        category,
        glass,
        alco,
        ing: [ing1, ing2, ing3, ing4, ing5],
      };

      setData(data);
      setIsFetchOk(true);
    } catch {
      setIsFetchOk(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <div className="_container cocktail">
      {isFetchOk ? (
        <React.Fragment>
          <div className="cocktail__column">
            <img src={data.image} alt="" />
          </div>
          <div className="cocktail__column">
            <div className="cocktail__str">
              <span>name :</span> {data.name}
            </div>
            <div className="cocktail__str">
              <span>categor :</span> {data.category}
            </div>
            <div className="cocktail__str">
              <span>glass :</span> {data.glass}
            </div>
            <div className="cocktail__str">
              <span>Alcoholic :</span>
              {data.alco}
            </div>
            <div className="cocktail__str">
              <span>info :</span>
              {data.ing.map((el) => {
                if (el) {
                  return el + ", ";
                } else {
                  return "";
                }
              })}
            </div>
            <div className="cocktail__str">
              <span>instructions :</span>
              {data.instructions}
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="info">
          The cocktail does not exist or there is no data on it
        </div>
      )}
    </div>
  );
}
