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
    
    <div className="leitartitill">
      
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="leitarmyndir"
      />
      
      <div className="leitartexti">

        <button onClick={toggleFavorite} className="favbutton" title={isFavorite ? "Fjarlægja af lista" : "Bæta í lista"}>
        {isFavorite ? "⭐" : "☆"}
      </button>
      
        <h3 className="leitartexti">{meal.strMeal}</h3>
      </div>
      </div>
  );
}

export default MealCard;
