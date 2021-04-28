import React, { useContext } from "react";
import "./App.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import E404 from "./components/E404/E404";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import CocktailSingle from "./components/CocktailSingle/CocktailSingle";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <CocktailSingle />
        </Route>
        <Route path="*">
          <E404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
