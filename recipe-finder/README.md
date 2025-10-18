# 🍲 Recipe Finder — Recipe Finder App

Recipe Finder is a modern web application built with **React** and **Tailwind CSS**, designed to celebrate the rich culinary heritage of Africa.  
Users can explore authentic recipes, browse by categories, learn cultural stories behind meals, and discover how to prepare them.

---

## 🌍 Overview

AfriCuisine allows users to:
- Browse African recipes (e.g., Jollof Rice, Fufu, Bobotie, Couscous, Injera, and more)
- Filter meals by **region** or **category**
- View detailed recipe instructions
- Discover the **cultural background** behind dishes
- Learn more about African cuisine through the **About page**

The project was built with simplicity, interactivity, and scalability in mind.

---

## ✨ Features

### 🏠 Landing Page
- Hero section with background image and search bar  
- Beautiful headline: “Discover Ghanaian Recipes”  
- Responsive design with dark overlay for readability  

### 🍛 Recipes Page
- Displays recipe cards (images, titles, and preparation details)
- Clicking a recipe shows cooking instructions and ingredients  
- Organized grid layout for better presentation  

### 🍽️ Categories Page
- Recipes grouped by African regions:
  - **West Africa** – Jollof Rice, Fufu, Yam Dishes  
  - **North Africa** – Tagines, Couscous, Harissa  
  - **East Africa** – Injera, Berbere, Coffee Ceremony  
  - **South Africa** – Bobotie, Braai, Potjiekos  
- Each section visually separated and styled for clarity

### 📖 About Page
- Yellow background highlighting African warmth and culture  
- Explains AfriCuisine’s mission:
  - Preserving African culinary heritage  
  - Building community through food  
  - Teaching cultural stories behind dishes  
- Includes “Culinary Journey Across Africa” map section (custom image)  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js** | Core front-end framework |
| **Tailwind CSS** | Styling and layout |
| **Vite** | Fast development environment |
| **JavaScript (ES6+)** | Logic and interactivity |
| **React Hooks** | State and component management |

---

## 📂 Project Structure
recipe-finder/
├── src/
│   ├── assets/               # Images and static files
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── RecipeCard.jsx
│   │   ├── Categories.jsx
│   │   └── RecipeSkeleton.jsx
│   ├── pages/                # Main pages
│   │   ├── LandingPage.jsx
│   │   ├── RecipesPage.jsx
│   │   ├── CategoriesPage.jsx
│   │   └── AboutPage.jsx
│   ├── App.jsx               # Navigation logic (Landing, Recipes, Categories, About)
│   └── main.jsx              # Entry point
└── index.html


## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js (v16 or later)** and **npm** installed.

### Installation

```bash
# Clone this repository
git clone https://github.com/<Paakwesi2-3>/Recipe-Finder-.git

# Go into the project directory
cd recipe-finder

# Install dependencies
npm install

# Run the development server
npm run dev

🔍 Future Improvements
	•	Add live search functionality using an API
	•	Implement user authentication and recipe submission
	•	Enable favorites/bookmarking of dishes
	•	Add Ghanaian map animation on About Page

⸻

🙌 Acknowledgements

This app was built as part of a front-end development learning journey with ALX.

⸻

🧑‍💻 Author

Paa Kwesi Larbi
Front-End Developer | Lifelong Learner | Food Enthusiast