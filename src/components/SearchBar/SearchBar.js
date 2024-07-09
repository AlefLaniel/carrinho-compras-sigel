/* eslint-disable no-restricted-globals */
import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';

import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../contexts/AppContext';

function SearchBar() {

  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className="flex bg-white w-full max-w-[500px] justify-between shadow-lg shadow-black/10 gap-3 pr-3" onSubmit={handleSearch}>
      {name}
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="p-3 flex-grow border-none outline-none text-sm font-medium border-r border-[#ddd]"
        onChange={ ({ target }) => setSearchValue(target.value) }
        required
      />

      <button type="submit" className="bg-none border-none text-sm flex items-center justify-center text-[#333]">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
