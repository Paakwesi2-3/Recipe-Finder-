import React from "react";

export default function CategoryCard({ category, onSelect }) {
  return (
    <div
      onClick={() => onSelect(category)}
      className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {category.description}
        </p>
      </div>
    </div>
  );
}