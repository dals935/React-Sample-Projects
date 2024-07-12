import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import "./content.css";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <div className="content">
        <FoodList foodData={foodData} />
      </div>
    </div>
  );
}
