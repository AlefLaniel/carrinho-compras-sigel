import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../contexts/AppContext';

function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([ ...cartItems, data ]);

  return (
    <section className="product-card">
      
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="w-full"
      />

      <div className="p-5 border-t border-[#ddd]">
        <h2 className="text-3xl font-normal block mb-3">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="text-sm text-black/50 font-medium">{title}</h2>
      </div>

      <button
        type="button"
        className="button__add-cart"
        onClick={ handleAddCart }
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
