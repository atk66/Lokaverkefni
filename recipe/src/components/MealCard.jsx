function MealCard({ meal }) {
  return (
    <div className="meal">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="meal-content">
        <h3>{meal.strMeal}</h3>
        <p><strong>Category:</strong> {meal.strCategory}</p>
        <p><strong>Area:</strong> {meal.strArea}</p>
        <p>{meal.strInstructions.slice(0, 120)}...</p>
      </div>
    </div>
  );
}

export default MealCard;
