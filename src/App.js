import React, { useState, useReducer } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import { expenseReducer } from './reducers/expenseReducer';
import './App.css';

function App() {
  const [expenses, dispatch] = useReducer(expenseReducer, []);
  const [budgetLimit, setBudgetLimit] = useState(1000); // Set initial budget
  const [alert, setAlert] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(null); // To track the expense being edited

  const addExpense = (expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
    checkBudgetLimit(expense.amount);
  };

  const editExpense = (expense) => {
    dispatch({ type: 'EDIT_EXPENSE', payload: expense });
    setCurrentExpense(null); // Reset the currentExpense after editing
  };

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: id });
  };

  const checkBudgetLimit = (amount) => {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0) + amount;
    if (totalExpenses >= budgetLimit) {
      setAlert(true);
    } else {
      setAlert(false);
    }
  };

  return (
    <div className="App">
      <h1>Personal Budget Manager</h1>
      {alert && <p className="alert">Warning: You are nearing your budget limit!</p>}
      
      <ExpenseForm 
        addExpense={addExpense} 
        editExpense={editExpense} 
        currentExpense={currentExpense}
      />
      <ExpenseList 
        expenses={expenses} 
        deleteExpense={deleteExpense} 
        setCurrentExpense={setCurrentExpense} // Pass the currentExpense setter to enable editing
      />
      <ExpenseChart expenses={expenses} />

      <div className="budget-limit">
        <h3>Set Budget Limit</h3>
        <input
          type="number"
          value={budgetLimit}
          onChange={(e) => setBudgetLimit(Number(e.target.value))}
        />
        <p>Current Budget Limit: ${budgetLimit}</p>
      </div>
    </div>
  );
}

export default App;
