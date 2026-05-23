import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipe } from '../hooks/useRecipe';
import IngredientList from '../components/recipe/IngredientList';

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const { recipe, loading, error } = useRecipe(recipeId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading recipe.</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-auto my-4" />
      <p className="text-lg">Estimated Cost: {recipe.estimatedCost} IDR</p>
      <p className="text-lg">Servings: {recipe.servings}</p>
      <p className="text-lg">Prep Time: {recipe.prepTime} minutes</p>
      <p className="text-lg">Cook Time: {recipe.cookTime} minutes</p>
      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <IngredientList ingredients={recipe.ingredients} />
      <h2 className="text-xl font-semibold mt-4">Steps</h2>
      <ol className="list-decimal list-inside">
        {recipe.steps.map((step, index) => (
          <li key={index} className="my-2">{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;