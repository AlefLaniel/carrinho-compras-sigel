import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../contexts/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const history = useNavigate();
  const { cartItems, isCartVisible, totalPrice, setTotalPrice } = useContext(AppContext);

  console.log(cartItems);

  setTotalPrice(cartItems.reduce((acc, item) => item.price + acc, 0));

  return (
    <section className={`w-full max-w-[330px] bg-white h-screen fixed top-0 right-0 p-[100px_20px_20px] flex flex-col justify-between transform transition-all duration-400 ease ${isCartVisible ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex-grow overflow-auto">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>

      <div className="text-[1.8rem] font-medium py-[35px_0_15px] border-t border-gray-300">
        {formatCurrency(totalPrice, 'BRL')}
      </div>
      <button className="w-full p-3 bg-green-500 font-semibold text-lg text-white rounded-md" onClick={() => { history('/finalizacompra'); }}>Finalizar</button>
    </section>
  );
}

export default Cart;
