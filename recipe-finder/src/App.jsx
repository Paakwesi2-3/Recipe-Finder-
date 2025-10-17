import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import RecipesPage from "./pages/RecipesPage";
import CategoriesPage from "./pages/CategoriesPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  const [currentView, setCurrentView] = useState("landing");
  const [searchResults, setSearchResults] = useState([]);

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === "landing" && (
        <LandingPage
          onNavigate={handleNavigate}
          currentView={currentView}
          setSearchResults={setSearchResults}
        />
      )}

      {currentView === "dashboard" && (
        <RecipesPage
          onNavigate={handleNavigate}
          currentView={currentView}
          searchResults={searchResults}
        />
      )}

      {currentView === "categories" && (
        <CategoriesPage onNavigate={handleNavigate} currentView={currentView} />
      )}

      {currentView === "about" && (
        <AboutPage onNavigate={handleNavigate} currentView={currentView} />
      )}
    </div>
  );
}