/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import formatCurrency from '../../utils/formatCurrency';
// eslint-disable-next-line linebreak-style

const CheckShopping = () => {
  const { cartItems, totalPrice } = useContext(AppContext);
  console.log('dados do carrinho: ', cartItems);

  return (
    <div>
      <div>
        {cartItems.map((item) => (
          <h3 key={item.id}>{item.title}</h3>
        ))}
      </div>
      <h4>Preço total: {formatCurrency(totalPrice, 'BRL')}</h4>
    </div>
  );
};

export default CheckShopping;
