import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">A</div>
          <span className="font-semibold text-lg">AfriCuisine</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm text-gray-700">
          <a className="hover:text-primary" href="/">Home</a>
          <a className="hover:text-primary" href="/recipes">Recipes</a>
          <a className="hover:text-primary" href="/categories">Categories</a>
          <a className="hover:text-primary" href="/about">About</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-md hover:bg-gray-100">🔍</button>
        </div>
      </div>
    </nav>
  )
}
