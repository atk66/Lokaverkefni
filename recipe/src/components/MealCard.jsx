import { useState, useEffect } from "react";

function MealCard({ meal }) {

  const [isFavorite, setIsFavorite] = useState(false);


  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some(fav => fav.idMeal === meal.idMeal));
  }, [meal.idMeal]);


  const toggleFavorite = (e) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {

      const newFavorites = favorites.filter(fav => fav.idMeal !== meal.idMeal);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {

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

      {}
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 text-xl"
        title={isFavorite ? "Fjarlægja af lista" : "Bæta í lista"}
      >
        {isFavorite ? "⭐" : "☆"}
      </button>
    </div>
  );
}

export default MealCard;
