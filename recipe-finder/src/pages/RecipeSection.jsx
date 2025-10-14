import React from "react";
import RecipeCard from "../components/RecipeCard";

export default function RecipeSection({ recipes, onSelect }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Popular Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}