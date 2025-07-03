import React, { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';


const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [expense, setExpense] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('expense') ?? '[]');
    return saved;
  });

  const totalAmount = expense.reduce((acc, curr) => acc + curr.amount, 0);

  useEffect(() => {
    localStorage.setItem('expense', JSON.stringify(expense));
  }, [expense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };

    setExpense((prev) => [newExpense, ...prev]);
    setTitle('');
    setAmount('');
  };

  const handleDelete = (id) => {
    const updated = expense.filter((item) => item.id !== id);
    setExpense(updated);
  };

  return (
    <>
    <div className="p-4 sm:p-6 md:p-10 lg:p-16 max-w-2xl mx-auto border-blue-400">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-center text-[#008080] mb-6">
        Track Every Rupee | Smarter Saving 💰💵
      </h1>
      </div>
<div>
      <form
        onSubmit={handleSubmit}
className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow-md w-full max-w-md mx-auto"
      >
        <input
          placeholder="Expense Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-3 rounded focus:outline-[#008080]"
          required
        />
        <input
          placeholder="Expense Amount..."
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border border-gray-300 p-3 rounded focus:outline-[#008080]"
          required
        />
        <button
          type="submit"
          className="bg-[#008080] text-white py-3 rounded hover:bg-[#006666] transition"
        >
          Add Expense
        </button>
      </form>
      </div>

      <ul className="mt-4 space-y-3 px-4 sm:px-0">
  {expense.map((el) => (
    <li
      key={el.id}
      className="bg-gray-100 p-3 rounded shadow w-full max-w-md mx-auto"
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium text-gray-800">{el.title}</p>
          <p className="text-gray-700">₹{el.amount}</p>
        </div>
        <button
          onClick={() => handleDelete(el.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center gap-1 ml-4"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  ))}
</ul>


      <div className="mt-6 font-bold text-lg sm:text-xl px-3 py-1 text-gray-800">
        Total: ₹{totalAmount.toFixed(2)}
      </div>
  
    </>
    
  );
};

export default ExpenseForm;

