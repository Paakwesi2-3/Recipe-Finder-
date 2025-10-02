import React from 'react'
import Navbar from '../components/Navbar'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Discover Authentic African Flavors</h1>
        <p className="mt-4 text-gray-600">Simple app skeleton for the recipe finder — working on layout.</p>
      </main>
    </div>
  )
}
