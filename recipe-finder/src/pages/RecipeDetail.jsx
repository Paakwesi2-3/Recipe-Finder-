import React from "react";

export default function RecipeDetail({ recipe, onBack }) {
  if (!recipe) return null;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-8">
      <button
        onClick={onBack}
        className="mb-6 text-blue-600 hover:underline text-sm font-medium"
      >
        ← Back to recipes
      </button>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        {recipe.title}
      </h1>

      <p className="text-gray-700 leading-relaxed mb-4 text-center">
        {recipe.description}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
        Ingredients:
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
        How to Prepare:
      </h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}