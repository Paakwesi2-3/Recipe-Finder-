import React from "react";
import RecipeCard from "../components/RecipeCard";

export default function RecipeSection({ recipes, onSelect }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Discover Delicious Recipes 🍲
      </h2>

      {recipes && recipes.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => onSelect(recipe)}
              className="cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">
          No recipes found. Try again later!
        </p>
      )}
    </section>
  );
}