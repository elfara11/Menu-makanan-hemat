import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WeeklyPlan from './pages/WeeklyPlan';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Budget from './pages/Budget';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Onboarding from './pages/Onboarding';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekly-plan" element={<WeeklyPlan />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </Router>
  );
};

export default App;