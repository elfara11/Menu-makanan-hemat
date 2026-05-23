import React from 'react';
import RecipeCard from '../components/recipe/RecipeCard';
import { useRecipes } from '../hooks/useRecipes';

const Recipes = () => {
  const { recipes, loading, error } = useRecipes();

  if (loading) {
    return <div>Loading recipes...</div>;
  }

  if (error) {
    return <div>Error loading recipes: {error.message}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;