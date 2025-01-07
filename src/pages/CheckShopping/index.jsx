/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import formatCurrency from '../../utils/formatCurrency';
// eslint-disable-next-line linebreak-style

const CheckShopping = () => {
  const { cartItems, totalPrice } = useContext(AppContext);
  console.log('dados do carrinho: ', cartItems);

  return (
    <div className="w-max[800px] my-0 mx-auto p-5 bg-[#f8f8f8] rounded-lg">
      <h2 className='text-center mb-5'>Resumo da Compra</h2>
      <div className="border-t border-b border-[#ddd]">
        {cartItems.map((item) => (
          <div key={item.id} className="flex py-4 px-0 border-b border-[#ddd]">
            <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover rounded-lg mr-5"  />
            <div className="flex-1">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="flex justify-between">
                <p>Preço unitário: {formatCurrency(item.price, 'BRL')}</p>
                <p>Quantidade: {item.quantity}</p>
              </div>
            </div>
            <div className="text-base font-bold text-[#333]">
              <h4>Total: {formatCurrency(item.price * item.quantity, 'BRL')}</h4>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-right text-lg mt-5">Preço total: {formatCurrency(totalPrice, 'BRL')}</h3>
    </div>
  );
};

export default CheckShopping;
