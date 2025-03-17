"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-extrabold mb-4 text-yellow-400">Meal Ideas</h2>
      {ingredient ? (
        <p className="text-lg font-bold text-gray-300">
          Here are meal ideas using <span className="text-yellow-300">{ingredient}</span>:
        </p>
      ) : (
        <p className="text-lg font-bold text-red-400">Select an ingredient to see meal ideas</p>
      )}
      <ul className="list-disc ml-6 mt-2">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="p-3 bg-slate-800 hover:bg-yellow-500 text-white font-semibold cursor-pointer rounded-md transition duration-300"
          >
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}