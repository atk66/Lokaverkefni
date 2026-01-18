import { useState, useEffect } from "react";
import MealCard from "../components/MealCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  return (
    <div className="uppahald">
      <h1 className="textiuppahalds">Mínar uppskriftir</h1>
      {favorites.length === 0 ? (
        <p>Þú hefur ekki vistað neinar uppskriftir.</p>
      ) : (
        <div className="uppahaldscards">
          {favorites.map(meal => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
