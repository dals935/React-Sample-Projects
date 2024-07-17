import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./itemList";

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
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
      </div>
      <div className={styles.recipeDetails}>
        <span>
          <strong>⌚Prep Time: {food.readyInMinutes} Minutes, </strong>
        </span>
        <span>
          <strong>🍴Number Of Servings: {food.servings}, </strong>
        </span>
        <span>
          <strong>
            {food.vegetarian ? " 🍆Vegetarian, " : " 🍖Non-Vegetarian, "}
          </strong>
        </span>
        <span>
          <strong>{food.vegan ? " 🥗Vegan, " : " 🍗Non-Vegan, "}</strong>
        </span>
        <span>
          <strong>
            💲{(food.pricePerServing / 100).toFixed(2)} Per Serving{" "}
          </strong>
        </span>
      </div>
      <ItemList food={food} isLoading={isLoading} />
      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
