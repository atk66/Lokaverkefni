import { useState, useEffect } from "react";

function MealCard({ meal }) {
  // State to track if this meal is favorited
  const [isFavorite, setIsFavorite] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some(fav => fav.idMeal === meal.idMeal));
  }, [meal.idMeal]);

  // Toggle favorite
  const toggleFavorite = (e) => {
    e.stopPropagation(); // prevent triggering link
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      // Remove from favorites
      const newFavorites = favorites.filter(fav => fav.idMeal !== meal.idMeal);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      // Add to favorites
      favorites.push(meal);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (
    <div className="relative bg-white rounded shadow-lg hover:scale-105 transform transition duration-300 overflow-hidden">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
      </div>

      {/* Favorite button */}
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 text-xl"
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default MealCard;
