import React from "react";
import Navbar from "../components/Navbar";
import { categories } from "../data/categoriesData";

export default function CategoriesPage({ onNavigate, currentView }) {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar onNavigate={onNavigate} currentView={currentView} />

      <div className="pt-24 px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Regional African Cuisines
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore Africa’s diverse culinary traditions. Each region brings
          unique flavors, cooking techniques, and cultural stories to the table.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all ${category.color}`}
            >
              <div className="text-4xl mb-3">{category.emoji}</div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {category.name}
              </h2>
              <p className="text-gray-600 mb-3">{category.description}</p>
              <p className="text-sm text-gray-700">
                <span className="font-medium text-orange-600">Popular:</span>{" "}
                {category.popular.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}