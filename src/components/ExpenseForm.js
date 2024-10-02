import React, { useState, useEffect } from 'react';

function ExpenseForm({ addExpense, editExpense, currentExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  // Populate form when editing an expense
  useEffect(() => {
    if (currentExpense) {
      setTitle(currentExpense.title);
      setAmount(currentExpense.amount);
      setCategory(currentExpense.category);
    }
  }, [currentExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: currentExpense ? currentExpense.id : Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString().split('T')[0],
    };

    if (currentExpense) {
      editExpense(expense); // Call editExpense if we're editing
    } else {
      addExpense(expense); // Call addExpense if it's a new expense
    }

    // Reset form
    setTitle('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{currentExpense ? 'Edit Expense' : 'Add New Expense'}</h2>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        value={amount}
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        value={category}
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">{currentExpense ? 'Update Expense' : 'Add Expense'}</button>
    </form>
  );
}

export default ExpenseForm;
