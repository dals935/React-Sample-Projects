import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "fd4ac8ea44c642f5a8854c858571a772";
  useEffect(() => {
    async function fetchDetails() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchDetails();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
      </div>
      <span>
        <strong>⌚Prep Time: {food.readyInMinutes} Minutes,</strong>
      </span>
      <span>
        {" "}
        <strong>🍴Number Of Servings: {food.servings},</strong>
      </span>
      <span>
        <strong>
          {food.vegetarian ? " 🍆 Vegetarian" : " 🍖 Non-Vegetarian"}
        </strong>
      </span>
      <span>
        <strong>{food.vegan ? " 🥗 Vegan" : " 🍗 Non-Vegan"}</strong>
      </span>
      <div>
        💲 <span>{food.pricePerServing / 100} Per Serving </span>
      </div>
      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}
