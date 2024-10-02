import React from 'react';

function ExpenseList({ expenses, deleteExpense, setCurrentExpense }) {
  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <strong>{expense.title}</strong> - ${expense.amount} ({expense.category})
            <button onClick={() => setCurrentExpense(expense)}>Edit</button>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
