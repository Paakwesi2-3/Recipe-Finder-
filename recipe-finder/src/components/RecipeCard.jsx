export default function RecipeCard({ recipe, onSelect }) {
  return (
    <div
      onClick={() => onSelect(recipe)}
      className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{recipe.title}</h3>
        <p className="text-gray-600 text-sm">{recipe.description}</p>
      </div>
    </div>
  );
}