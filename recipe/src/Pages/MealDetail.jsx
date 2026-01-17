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

  if (!meal) return <p>Loading...</p>;

  return (
    
    <div className="max-w-3xl mx-auto p-6">
          <button onClick={() => window.history.back()} className="text-blue-500 hover:underline mb-4">
  ← Back
</button>
      <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded mb-6" />

      

      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {Array.from({ length: 20 }).map((_, i) => {
          const ingredient = meal[`strIngredient${i + 1}`];
          const measure = meal[`strMeasure${i + 1}`];
          if (!ingredient) return null;
          return <li key={i}>{ingredient} - {measure}</li>;
        })}
      </ul>



      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <p>{meal.strInstructions}</p>
    </div>
  );
}

export default MealDetail;
