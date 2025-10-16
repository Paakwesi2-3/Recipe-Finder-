import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";
import RecipeDetail from "./RecipeDetail";
import { recipes } from "../data/recipeData";

export default function RecipesPage({ onNavigate, currentView }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar onNavigate={onNavigate} currentView={currentView} />

      {/* Page Content */}
      <div className="pt-24 max-w-7xl mx-auto px-6 md:px-10">
        {!selectedRecipe ? (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Explore Delicious Recipes 🍽️
            </h1>
            <p className="text-gray-600 text-center mb-10">
              Click on any meal to view the full recipe instructions.
            </p>

            {/* Recipes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onSelect={setSelectedRecipe}
                />
              ))}
            </div>
          </>
        ) : (
          <RecipeDetail
            recipe={selectedRecipe}
            onBack={() => setSelectedRecipe(null)}
          />
        )}
      </div>
    </div>
  );
}