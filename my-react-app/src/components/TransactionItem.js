export default function TransactionItem({ date, description, category, amount }) {
    return (
      <tr class>
        <td>{date}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td> 
      </tr>
    );
  }
  