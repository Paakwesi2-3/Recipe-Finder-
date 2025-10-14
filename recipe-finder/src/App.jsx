import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import RecipesPage from "./pages/RecipePages";

export default function App() {
  const [currentView, setCurrentView] = useState("landing");

  return (
    <div>
      {currentView === "landing" && (
        <LandingPage onNavigate={setCurrentView} currentView={currentView} />
      )}
      {currentView === "recipes" && (
        <RecipesPage onNavigate={setCurrentView} currentView={currentView} />
      )}
    </div>
  );
}