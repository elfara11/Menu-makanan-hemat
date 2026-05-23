import React from 'react';
import BudgetTracker from '../components/budget/BudgetTracker';
import BudgetChart from '../components/budget/BudgetChart';
import BudgetSummary from '../components/budget/BudgetSummary';

const Budget = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Manajemen Budget</h1>
            <BudgetTracker />
            <BudgetChart />
            <BudgetSummary />
        </div>
    );
};

export default Budget;