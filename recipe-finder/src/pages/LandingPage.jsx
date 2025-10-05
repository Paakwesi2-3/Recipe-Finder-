import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function LandingPage() {
  return (
    <div className="w-full h-full">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
    </div>
  );
}
