import { useState } from "react";
import heroImage from "../assets/hero-bg.jpg";
import { recipes } from "../data/recipeData";

export default function Hero({ onNavigate, setSearchResults }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
    onNavigate("dashboard");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Discover Ghanaian Recipes
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
          Explore authentic flavors and share your favorite dishes with the community.
        </p>

        {/* Search bar */}
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Search recipes..."
            className="flex-1 px-4 py-2 rounded-l-md focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={handleSearch}
            className="bg-yellow-500 text-white px-4 py-2 rounded-r-md font-semibold hover:bg-yellow-600"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}