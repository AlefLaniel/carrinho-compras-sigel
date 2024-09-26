import React, { useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext';
import formatCurrency from '../../utils/formatCurrency';

const CheckShopping = () => {
  const { cartItems, totalPrice } = useContext(AppContext);
  const [preferenceId, setPreferenceId] = useState(null);

  // Função para gerar a preferência de pagamento
  const handleCheckout = async () => {
    const items = cartItems.map(item => ({
      title: item.title,
      quantity: item.available_quantity,
      unit_price: item.price,
      currency_id: 'BRL',
    }));

    // Faz a requisição para criar a preferência de pagamento no backend
    const response = await fetch('/create_preference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });

    const { id } = await response.json();
    setPreferenceId(id);

    // Verifica se o Mercado Pago está disponível no window
    if (window.MercadoPago) {
      const mp = new window.MercadoPago('Public_Key', { locale: 'pt-BR' }); // Substitua pela sua public key
      mp.checkout({
        preference: {
          id, // ID da preferência de pagamento gerada no backend
        },
        autoOpen: true, // Para abrir o modal automaticamente
      });
    }
  };

  return (
    <div className="w-max[800px] w-[95%] my-0 mx-auto p-5 bg-[#d8d8d8] rounded-lg flex flex-col">
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
                <p>Quantidade: {item.available_quantity}</p>
              </div>
            </div>
            <div className="text-base text-[#333]">
              <h4>Subtotal: {formatCurrency(item.price * item.available_quantity, 'BRL')}</h4>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-right font-bold text-lg mt-5">Preço total: {formatCurrency(totalPrice, 'BRL')}</h3>
      
      {/* Botão para abrir o modal de pagamento */}
      <button
        className="w-[80%] md:w-[50%] lg:w-[30%] p-3 bg-green-500 font-semibold text-lg text-white rounded-md mt-5 self-center"
        onClick={handleCheckout}
      >
        Realizar Pagamento
      </button>
    </div>
  );
};

export default CheckShopping;
