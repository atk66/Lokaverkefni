import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MealDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setMeal(data.meals[0]))
      .catch(err => console.error(err));
  }, [id]);

  if (!meal) return <p>Hleður...</p>;

  return (
    
    <div className="recipetexti">
          
          <button onClick={() => window.history.back()} className="backtexti">← Til baka</button>

      <h1 className="mealheiti">{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="mealimg" />

      

      <h2 className="textihra">Hráefni</h2>
      <ul className="textiinni">
        {Array.from({ length: 20 }).map((_, i) => {
          const ingredient = meal[`strIngredient${i + 1}`];
          const measure = meal[`strMeasure${i + 1}`];
          if (!ingredient) return null;
          return <li key={i}>{ingredient} - {measure}</li>;
        })}
      </ul>



      <h2 className="textileid">Leiðbeiningar</h2>
      <p>{meal.strInstructions}</p>
    </div>
    
  );
}

export default MealDetail;
