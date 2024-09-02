import React, { useState, useEffect } from "react";
import "./Pizza.css";

export default function Pizza() {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    const data = await response.json();
    setPizzas(data.recipes);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Pizza Recipes</h2>
      <div className="row">
        {pizzas.map((item) => (
          <div className="col-md-4" key={item.recipe_id}>
            <div className="card mb-4">
              <img src={item.image_url} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <a href={item.source_url} className="btn btn-primary">
                  View Recipe
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
