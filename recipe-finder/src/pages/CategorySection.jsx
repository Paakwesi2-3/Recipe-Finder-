import React from "react";
import CategoryCard from "../components/CategoryCard";

export default function CategorySection({ categories, onSelect }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}