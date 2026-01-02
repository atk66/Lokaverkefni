import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MealCard from "./components/MealCard";
import "./App.css";

function App() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMeals = async (query) => {
    if (!query) return;

    setLoading(true);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    setMeals(data.meals || []);
    setLoading(false);
  };

  return (
    <div>
      <header className="header">
        <h1>🍽️ Recipe Finder</h1>
        <SearchBar onSearch={searchMeals} />
      </header>

      <main className="meals">
        {loading && <p>Loading...</p>}
        {!loading && meals.length === 0 && <p>No meals found 😢</p>}
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </main>
    </div>
  );
}

export default App;
