import React from 'react';
import TransactionItem from './TransactionItem'; // Make sure to import TransactionItem component if it exists

export default function Transactions({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {/* transaction items */}
        {transactions.map((transaction) => (
          <TransactionItem
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
            key={transaction.id} // Fixed typo in 'transaction'
          />
        ))}
      </tbody>
    </table>
  );
}
