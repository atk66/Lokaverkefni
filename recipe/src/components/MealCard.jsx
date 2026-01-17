function MealCard({ meal }) {
  return (
    <div className="bg-white rounded shadow-lg hover:scale-105 transform transition duration-300 overflow-hidden">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
      </div>
    </div>
  );
}

export default MealCard;
