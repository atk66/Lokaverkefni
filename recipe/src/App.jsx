import { useState } from "react";
import MealCard from "./components/MealCard";

function App() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");

  const searchMeal = async () => {
    if (!search) {
      setError("Skrifaðu nafn uppskriftar eða matar");
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
        setError("Engar uppskriftir fundust");
      } else {
        setMeals(data.meals);
      }
    } catch {
      setError("Náði ekki að sækja uppskriftir");
    }
  };

  return (
    <div>
      <header>
        <h1>Uppskriftar leitarvél</h1>
        <p>Finndu girnilegar uppskriftir</p>
      </header>

      <div className="search-box">
        <input
          type="text"
          placeholder="Leita af uppskrift"
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
