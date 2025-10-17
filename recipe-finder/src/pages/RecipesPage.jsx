import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RecipeSection from "./RecipeSection";
import RecipeDetail from "./RecipeDetail";
import { recipes } from "../data/recipeData";

export default function RecipesPage({ onNavigate, currentView, searchResults }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const dataToShow = searchResults.length > 0 ? searchResults : recipes;

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar onNavigate={onNavigate} currentView={currentView} />

      <div className="pt-20">
        {selectedRecipe ? (
          <RecipeDetail
            recipe={selectedRecipe}
            onBack={() => setSelectedRecipe(null)}
          />
        ) : (
          <RecipeSection recipes={dataToShow} onSelect={setSelectedRecipe} />
        )}
      </div>
    </div>
  );
}