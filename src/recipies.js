import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import "./recipies.css";

const Recipies = (props) => {
  let calorie_final = Math.round(props.calories);

  return (
    <div className="Block1">
      <div className="Subblock1">
        <h2 className="food_name">{props.name}</h2>
        <h3 className="calorie_count">Calorie Count:- {calorie_final}</h3>
      </div>
      <div className="Subblock2">
        <ol>
          {props.process.map((e) => (
            <li>{e}</li>
          ))}
        </ol>
        <img className="image_data" src={props.image} />
      </div>
    </div>
  );
};
export default Recipies;
