import React, { useState } from "react";
import Recipies from "./recipies.js";
import styled from "@emotion/styled";
import "./App.css";

function App() {
  const [request, onrequest] = useState("");
  const [recipies, onrecipies] = useState([]);

  let getdata = async () => {
    let actual_data = await fetch(
      `https://api.edamam.com/search?q=${request}&app_id=424f1dc0&app_key=1af5b9a6cc8abb3a4f60c1d284e08bcd`
    );
    let json_data = await actual_data.json();
    onrecipies(json_data.hits);
  };

  const handlesearch = (e) => {
    e.preventDefault();
    getdata(request);
  };

  return (
    <div className="Block">
      <form>
        <input
          className="Input"
          value={request}
          onChange={(e) => onrequest(e.target.value)}
        />
        <button className="Button" onClick={(e) => handlesearch(e)}>
          SEARCH!!
        </button>
      </form>
      {recipies.map((final_data) => (
        <Recipies
          name={final_data.recipe.label}
          calories={final_data.recipe.calories}
          image={final_data.recipe.image}
          process={final_data.recipe.ingredientLines}
        />
      ))}
      ;
    </div>
  );
}

export default App;
