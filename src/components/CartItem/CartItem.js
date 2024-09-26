import React, { useContext } from 'react';
import propTypes from 'prop-types';
import {  BsCartDashFill, BsDashCircleFill, BsPlusCircleFill } from 'react-icons/bs';

import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../contexts/AppContext';

function CartItem({ data }) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price, available_quantity  } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const handleIncreaseQuantity = () => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, available_quantity: item.available_quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleDecreaseQuantity = () => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return item.available_quantity > 1
          ? { ...item, available_quantity: item.available_quantity - 1 }
          : item; // se quantidade for 1, não altera
      }
      return item;
    }).filter(item => item.available_quantity > 0); // remove o item se a quantidade for 0

    setCartItems(updatedItems);
  };

  return (
    <section className="flex items-start pb-5 mb-5 relative">
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="w-[70px]"
      />

      <div className="p-[0 35px 0 10px]">
        <h3 className="text-sm font-medium text-black/50 mb-2">{title}</h3>
        <h3 className="text-2xl font-medium">{formatCurrency(price, 'BRL')}</h3>

        <div className="flex items-center mt-2">
          <button
            type="button"
            className="text-[#d83232] text-xl border-none bg-none cursor-pointer mr-2"
            onClick={ handleDecreaseQuantity }
          >
            <BsDashCircleFill />
          </button>
          <span className="text-lg font-medium">{available_quantity}</span>
          <button
            type="button"
            className="text-[#32d832] text-xl border-none bg-none cursor-pointer ml-2"
            onClick={ handleIncreaseQuantity }
          >
            <BsPlusCircleFill />
          </button>
        </div>

        <button
          type="button"
          className="absolute top-0 right-0 text-[#d83232] text-2xl border-none bg-none cursor-pointer"
          onClick={ handleRemoveItem }
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
