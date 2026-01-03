import { useState } from "react";
import MealCard from "./components/MealCard";

function App() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");

  const searchMeal = async () => {
    if (!search) {
      setError("Please enter a recipe name");
      return;
    }

    setError("");

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();

      if (!data.meals) {
        setMeals([]);
        setError("No recipes found");
      } else {
        setMeals(data.meals);
      }
    } catch {
      setError("Failed to fetch recipes");
    }
  };

  return (
    <div>
      <header>
        <h1>🍽️ Recipe Finder</h1>
        <p>Search meals using TheMealDB API</p>
      </header>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchMeal}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="results">
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default App;
