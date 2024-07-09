import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';


import AppContext from '../../contexts/AppContext';

function CartButton() {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className="flex text-2xl items-center justify-center p-1 border-none bg-none cursor-pointer relative ml-5 text-[#333]"
      onClick={ () => setIsCartVisible(!isCartVisible) }
    >
      <AiOutlineShoppingCart />
      { cartItems.length > 0 && <span className="bg-red-500 w-4 h-4 absolute top-0 left-0 text-white text-[11px] font-semibold rounded-2xl flex items-center justify-center">{cartItems.length}</span> }
    </button>
  );
}

export default CartButton;
