import React from 'react';

function Search({ searchQuery, setSearchQuery }) {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    // console.log(searchQuery);
  };
  return (
    <div className='searchbar'>
      <label htmlFor='search'>Search Plants:</label>
      <input
        type='text'
        id='search'
        placeholder='Type a name to search...'
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
