import React from 'react';
import { useStore } from '../store/menuStore';
import MenuCard from '../components/menu/MenuCard';

const WeeklyPlan = () => {
  const { weeklyPlan, totalCost, remainingBudget } = useStore(state => ({
    weeklyPlan: state.menuPlan,
    totalCost: state.totalCost,
    remainingBudget: state.remainingBudget,
  }));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Rencana Menu Mingguan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {weeklyPlan.map((dayPlan, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{`Hari ${index + 1}`}</h2>
            {dayPlan.meals.map((meal, mealIndex) => (
              <MenuCard key={mealIndex} menu={meal} />
            ))}
            <p className="mt-2 text-gray-600">{`Total Biaya: Rp ${dayPlan.totalCost}`}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Total Biaya Mingguan: Rp {totalCost}</h2>
        <h2 className="text-lg font-semibold">Sisa Budget: Rp {remainingBudget}</h2>
      </div>
    </div>
  );
};

export default WeeklyPlan;