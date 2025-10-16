import React from "react";

export default function RecipeCard({ recipe, onSelect }) {
  return (
    <div
      onClick={() => onSelect(recipe)}
      className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
          {recipe.title}
        </h3>
      </div>
    </div>
  );
}