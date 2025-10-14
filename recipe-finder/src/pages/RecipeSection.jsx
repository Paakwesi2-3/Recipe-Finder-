import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeSkeleton from "../components/RecipeSkeleton";
import { motion, AnimatePresence } from "framer-motion";

export default function RecipeSection({ recipes, onSelect }) {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key="recipe-list"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {loading
          ? // Show skeleton cards while loading
            Array.from({ length: 6 }).map((_, i) => <RecipeSkeleton key={i} />)
          : // Show actual recipe cards after loading
            recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelect} />
            ))}
      </motion.section>
    </AnimatePresence>
  );
}