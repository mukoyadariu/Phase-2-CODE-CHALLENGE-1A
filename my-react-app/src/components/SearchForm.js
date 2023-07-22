import React, { useState } from 'react';


export default function SearchForm({ onSearching }) {
  const [search, setSearch] = useState('');

  function handleChange(e) {
    setSearch(e.target.value);
    onSearching(e.target.value);
  }

  return (
    <form>
      <input class="top-form" type="text" placeholder="search recent transactions..." onChange={handleChange} />
      <button class="the-btn">search</button>
    </form>
  );
}
