import React from "react";

export default function RecipeDetail({ recipe, onBack }) {
  if (!recipe) return null; // prevent blank crash

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
      >
        ← Back
      </button>

      {/* Recipe Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg mb-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Recipe Info */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        {recipe.title}
      </h1>
      <p className="text-lg text-gray-600 mb-8">{recipe.description}</p>

      {/* Ingredients Section */}
      <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
      <ul className="list-disc list-inside mb-8 text-gray-700 space-y-2">
        {recipe.ingredients?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Instructions Section */}
      <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        {recipe.instructions?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}