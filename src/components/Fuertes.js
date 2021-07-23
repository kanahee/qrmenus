import React from "react";
//import Input from "./Input";

export default function Fuertes({ meals }) {
  return (
    <section className="fuertes">
      {meals.map((meal, index) => (
        <article className="menu-item" key={index}>
          <h3 className="fuertes-name">{meal.name}</h3>

          <strong className="fuertes-price">${meal.price}</strong>
          <p className="fuertes-description">{meal.description}</p>
        </article>
      ))}
    </section>
  );
}
