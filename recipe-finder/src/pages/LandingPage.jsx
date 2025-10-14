import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function LandingPage({ onNavigate, currentView }) {
  return (
    <div className="w-full h-full">
      <Navbar onNavigate={onNavigate} currentView={currentView} />
      <Hero />
    </div>
  );
}