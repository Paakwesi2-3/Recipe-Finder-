import React from "react";
import Navbar from "../components/Navbar";
import aboutImage from "../assets/images/map africa.jpg";

export default function AboutPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative bg-yellow-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">About AfriCuisine</h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Celebrating the rich culinary heritage of Africa through authentic
          recipes, cultural stories, and the vibrant flavors that connect us to
          our roots.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={aboutImage}
          alt="African Cuisine"
          className="rounded-lg shadow-lg w-full h-80 object-cover"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-yellow-600">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            AfriCuisine is more than just a recipe platform—it's a celebration
            of African culture through food. We preserve traditional cooking
            methods, share family recipes passed down through generations, and
            make authentic African cuisine accessible to home cooks everywhere.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12 text-gray-800">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Heritage */}
            <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-600">
                Cultural Heritage
              </h3>
              <p className="text-gray-600">
                Preserving the authentic flavors and traditional cooking
                techniques that have been passed down through African families
                for centuries.
              </p>
            </div>

            {/* Community */}
            <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-600">
                Community
              </h3>
              <p className="text-gray-600">
                Building connections through shared meals and stories, honoring
                the communal spirit that is central to African dining
                traditions.
              </p>
            </div>

            {/* Education */}
            <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-600">
                Education
              </h3>
              <p className="text-gray-600">
                Teaching the stories behind each dish, the significance of
                ingredients, and the cultural context that makes African cuisine
                so special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Journey */}
<section className="bg-yellow-50 py-16 text-center">
  <h2 className="text-3xl font-semibold mb-10 text-yellow-700">
    Culinary Journey Across Africa
  </h2>

  <div className="flex justify-center items-center gap-8 flex-wrap md:flex-nowrap max-w-6xl mx-auto px-6">
    {[
      { region: "West Africa", dishes: "Jollof Rice, Fufu, Yam dishes" },
      { region: "North Africa", dishes: "Tagines, Couscous, Harissa" },
      { region: "East Africa", dishes: "Injera, Berbere, Coffee ceremony" },
      { region: "South Africa", dishes: "Bobotie, Braai, Potjiekos" },
    ].map((area) => (
      <div
        key={area.region}
        className="bg-white shadow-md rounded-lg p-6 w-[250px] hover:shadow-lg transition-all"
      >
        <h3 className="text-xl font-bold mb-2 text-yellow-700">
          {area.region}
        </h3>
        <p className="text-gray-700">{area.dishes}</p>
      </div>
    ))}
  </div>
</section>

      {/* Community CTA Section */}
      <section className="bg-yellow-500 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Join Our Culinary Community
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-6 leading-relaxed">
          Whether you're reconnecting with your heritage or discovering African
          flavors for the first time, every recipe tells a story worth sharing.
        </p>
        <button
          onClick={() => onNavigate("dashboard")}
          className="bg-white text-yellow-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
        >
          Start Cooking African Dishes
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} AfriCuisine. All rights reserved.</p>
      </footer>
    </div>
  );
}