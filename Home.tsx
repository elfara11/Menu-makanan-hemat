import React from 'react';
import { useStore } from '../store/userStore';
import BudgetTracker from '../components/budget/BudgetTracker';
import CalorieCalculator from '../components/profile/CalorieCalculator';
import MenuPlan from '../components/menu/MenuPlan';
import RecipeCard from '../components/recipe/RecipeCard';
import OrderCard from '../components/order/OrderCard';

const Home = () => {
  const { userProfile } = useStore();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">👋 Halo, {userProfile.name}!</h1>
      <BudgetTracker />
      <CalorieCalculator />
      <MenuPlan />
      <h2 className="text-xl font-semibold mt-4">🍳 Resep Direkomendasikan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example of rendering recipe cards */}
        {userProfile.favoriteRecipes.map(recipeId => (
          <RecipeCard key={recipeId} recipeId={recipeId} />
        ))}
      </div>
      <h2 className="text-xl font-semibold mt-4">🏪 Warung Terdekat</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example of rendering order cards */}
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
};

export default Home;