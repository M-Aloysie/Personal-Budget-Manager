import React from 'react';

const BudgetAlert = ({ expenses, budget }) => {
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const alerts = Object.keys(categoryTotals).map((category) => {
    if (categoryTotals[category] > budget[category]) {
      return (
        <p key={category} style={{ color: 'red' }}>
          Alert! You have exceeded your {category} budget!
        </p>
      );
    }
    return null;
  });

  return <div>{alerts}</div>;
};

export default BudgetAlert;
