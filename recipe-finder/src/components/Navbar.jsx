import React, { useState } from "react";
import { Menu, X, Search, Heart, User } from "lucide-react";

export default function Navbar({ currentView, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", value: "landing" },
    { label: "Recipes", value: "dashboard" },
    { label: "Categories", value: "categories" },
    { label: "About", value: "about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate("landing")}
          >
            <div className="w-9 h-9 border-2 border-yellow-400 flex items-center justify-center mr-3 rounded-full">
              <span className="text-yellow-400 text-lg font-bold">🍲</span>
            </div>
            <span className="text-2xl font-semibold">Recipe Finder</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`text-sm font-medium transition-all hover:text-yellow-400 ${
                  currentView === item.value
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {[Search, Heart, User].map((Icon, index) => (
              <button
                key={index}
                className="p-2 border border-white/30 rounded-full hover:bg-white/10 transition"
              >
                <Icon className="h-5 w-5" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="border border-white/40 p-2 rounded-lg"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md text-center py-4 space-y-3 border-t border-white/10">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onNavigate(item.value);
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-base font-medium py-2 transition-all ${
                currentView === item.value
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="flex justify-center space-x-5 pt-4 border-t border-white/20">
            {[Search, Heart, User].map((Icon, index) => (
              <button
                key={index}
                className="p-2 border border-white/30 rounded-full hover:bg-white/10 transition"
              >
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
