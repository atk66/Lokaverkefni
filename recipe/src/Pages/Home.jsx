import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MealCard from "../components/MealCard";

function Home() {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");


  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []))
      .catch((err) => console.error(err));
  }, []);


  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => setCategories(data.meals || []))
      .catch((err) => console.error(err));
  }, []);

 
  useEffect(() => {
    if (!selectedCategory) return;

    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
    )
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []))
      .catch((err) => console.error(err));
  }, [selectedCategory]);

  const handleSearch = () => {
    if (!query) return;

    setSelectedCategory("");

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []))
      .catch((err) => console.error(err));
  };

  return (
    <div className="sidutitill">
      <h1 className="titill">Uppskriftarsíða</h1>

      <div className="leit">
        <input
          type="text"
          placeholder="Leita af uppskrift"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="leit"
        />
        <button onClick={handleSearch} className="leitin">
          Leita
        </button>

      
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Sía eftir flokki</option>
          {categories.map((cat) => (
            <option key={cat.strCategory} value={cat.strCategory}>
              {cat.strCategory}
            </option>
          ))}
        </select>
      </div>

      <div className="container">
        {meals.map((meal) => (
          <Link key={meal.idMeal} to={`/meal/${meal.idMeal}`}>
            <MealCard meal={meal} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
