import React, { useEffect, useRef, useState } from "react";
import { Menu, X, Search, Heart, User } from "lucide-react";

export default function Navbar({ currentView, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const drawerRef = useRef(null);

  const navItems = [
    { label: "Home", value: "landing" },
    { label: "Recipes", value: "dashboard" },
    { label: "Categories", value: "categories" },
    { label: "About", value: "about" },
  ];

  // Close on escape and trap focus basics
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    }
    if (isMobileMenuOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  // prevent body scroll when drawer open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-gradient-to-r from-black/60 via-black/30 to-transparent backdrop-blur-sm border border-white/5 rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg">
          {/* Logo / Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onNavigate("landing")}
            aria-label="Go to home"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-50/10 ring-1 ring-yellow-400">
              <span className="text-yellow-400 text-lg">🍲</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-semibold">Recipe Finder</div>
              <div className="text-xs text-white/60">Discover tasty ideas</div>
            </div>
          </div>

          {/* Centered nav for desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`relative text-sm font-medium px-2 py-1 transition-colors duration-200 ${
                  currentView === item.value
                    ? "text-yellow-400"
                    : "text-white/90 hover:text-yellow-400"
                }`}
              >
                {item.label}
                {currentView === item.value && (
                  <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-yellow-400 rounded" />
                )}
              </button>
            ))}
          </div>

          {/* Actions + CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              {[Search, Heart, User].map((Icon, i) => (
                <button
                  key={i}
                  aria-label={`action-${i}`}
                  className="p-2 bg-white/5 border border-white/5 rounded-lg hover:bg-white/8 transition"
                >
                  <Icon className="w-4 h-4 text-white/90" />
                </button>
              ))}
            </div>

            <button
              onClick={() => onNavigate("dashboard")}
              className="hidden md:inline-block bg-yellow-400 text-black px-3 py-1.5 rounded-full font-semibold shadow-md hover:brightness-95 transition"
            >
              Get Recipes
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
                className="p-2 bg-white/5 border border-white/10 rounded-lg"
              >
                <Menu className="w-5 h-5 text-white/90" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* backdrop */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* sliding panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-80 max-w-full bg-gradient-to-b from-black/95 to-black/90 text-white transform transition-transform duration-300 shadow-2xl p-6 flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-yellow-50/5 flex items-center justify-center ring-1 ring-yellow-400">
                <span className="text-yellow-400">🍲</span>
              </div>
              <div>
                <div className="font-semibold">Recipe Finder</div>
                <div className="text-xs text-white/60">Let's cook something</div>
              </div>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-lg bg-white/5"
            >
              <X className="w-5 h-5 text-white/90" />
            </button>
          </div>

          <nav className="mt-8 flex-1">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.value}>
                  <button
                    onClick={() => {
                      onNavigate(item.value);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      currentView === item.value
                        ? "bg-yellow-400/10 text-yellow-400"
                        : "text-white/90 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto">
            <div className="flex items-center gap-3 mb-4">
              {[Search, Heart, User].map((Icon, i) => (
                <button
                  key={i}
                  className="p-2 bg-white/5 rounded-lg"
                  aria-label={`mobile-action-${i}`}
                >
                  <Icon className="w-4 h-4 text-white/90" />
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                onNavigate("dashboard");
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-yellow-400 text-black py-2 rounded-full font-semibold"
            >
              Get Recipes
            </button>
          </div>
        </aside>
      </div>
    </nav>
  );
}
