import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MealCard from "../components/MealCard";

function Home() {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState("");


  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then(res => res.json())
      .then(data => setMeals(data.meals || []))
      .catch(err => console.error(err));
  }, []);


  const handleSearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(res => res.json())
      .then(data => setMeals(data.meals || []))
      .catch(err => console.error(err));
  };

  return (
    <div className="sidutitill">
      <h1 className="text-3xl font-bold mb-4">Uppskriftarsíða</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Leita af uppskrift"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Leita</button>
      </div>

      <div className="container">
        {meals.map(meal => (
          <Link key={meal.idMeal} to={`/meal/${meal.idMeal}`}>
            <MealCard meal={meal} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
