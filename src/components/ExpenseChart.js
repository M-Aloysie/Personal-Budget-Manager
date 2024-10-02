import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ expenses }) {
  const categories = [...new Set(expenses.map((expense) => expense.category))];
  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses by Category',
        data: categories.map((category) =>
          expenses
            .filter((expense) => expense.category === category)
            .reduce((total, expense) => total + expense.amount, 0)
        ),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#66BB6A', '#FFA726'],
      },
    ],
  };

  return (
    <div>
      <h2>Expense Summary</h2>
      <Pie data={data} />
    </div>
  );
}

export default ExpenseChart;
