import './App.css';
import React, { useEffect, useState } from 'react';
import Transactions from './components/Transactions';
import NewTransactionForm from './components/NewTransactionForm';
import SearchForm from './components/SearchForm';

function App() {
  const [searchFilter, setSearchFilter] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((transc) => {
        setTransactions(transc);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  console.log(transactions);

  function handleUpdateOnSubmission(newTransaction) {
    console.log(newTransaction);
    setTransactions((transactions) => [...transactions, newTransaction]);

    const serverOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    };

    fetch("http://localhost:8001/transactions", serverOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((newItem) => setTransactions((currentTransactions) => [...currentTransactions, newItem]))
      .catch((err) => console.log(err));
  }

  const filteredTransactions = transactions.filter((transaction) =>
    searchFilter === "" ? true : transaction.description.includes(searchFilter)
  );

  return (
    <div className="ul raise segment">
      <div className='header-text'>
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div> // Display the error message instead of just "Error"
      ) : (
        <>
          <SearchForm onSearching={handleUpdateOnSubmission} />
          <NewTransactionForm onSubmission={handleUpdateOnSubmission} />
          <Transactions transactions={filteredTransactions} />
        </>
      )}
    </div>
  );
}

export default App;
