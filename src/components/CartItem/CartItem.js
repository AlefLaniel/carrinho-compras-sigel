import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsCartDashFill } from 'react-icons/bs';

import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../contexts/AppContext';

function CartItem({ data }) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
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
