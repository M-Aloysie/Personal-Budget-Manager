import React, { useState } from 'react';

const AddExpense = ({ setExpenses }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('food');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { amount: parseFloat(amount), category, date };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <input 
        type="number" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="entertainment">Entertainment</option>
      </select>
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;
