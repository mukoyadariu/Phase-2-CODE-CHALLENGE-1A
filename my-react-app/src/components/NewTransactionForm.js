import { useState } from "react";

export default function NewTransaction({ onSubmission }) {
  const [formData, setFormData] = useState({
    date: "",
    category: "",
    amount: 0,
    description: ""
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // Correct the typo 'preventDefaul' to 'preventDefault'
    onSubmission(formData); // Correct the function name to 'onSubmission'
    setFormData({
      date: "",
      category: "",
      amount: 0,
      description: ""
    });
  }

  return (
    <form class="Content-Type" onChange={handleChange} onSubmit={handleSubmit} id="New-item-form">
      <div className="form-inputs">
        <input value={formData.date} name="date" type="date" id="date" />
        <input
          value={formData.description}
          name="description"
          className="text-input"
          type={"text"}
          placeholder="Description..."
        />
        <input
          value={formData.category}
          name="category"
          className="text-input"
          type="text"
          placeholder="Category..."
        />
        <input class="amount" value={formData.amount}  type="number" />
      </div>
      <button class="btn">Add Transaction</button>
    </form>
  );
}
