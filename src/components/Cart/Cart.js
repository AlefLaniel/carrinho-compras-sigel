import React, { useContext, useEffect, useState } from 'react';
import CartItem from '../CartItem/CartItem';
import formaPgto from '../formaPgto/formaPgto';
import AppContext from '../../contexts/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import { useNavigate } from 'react-router-dom';
import pix from '../formaPgto/pix/pix.jsx';
import {QrCodePix} from "qrcode-pix";
import { EventBusyOutlined } from '@mui/icons-material';




function Cart() {
  const [qrCode, setQrCode] = useState('');
  const [rawPix, setRawPix] = useState('');
  const [minimalPIX, setMinimalPIX] = useState("");
  const [fullPIX, setFullPIX] = useState("");

  const [isFormaVisible, setIsFormaVisible] = useState(false)
  const [eVisivelPix, setEVisivelPix] = useState(false)
  const [forma, setForma] = useState('')

  const history = useNavigate();
  const { cartItems, isCartVisible, totalPrice, setTotalPrice } = useContext(AppContext);

  useEffect(() => {
    void generateDynamicPix();
    if (forma==='pix') {
      setIsFormaVisible(false);
      setEVisivelPix(true);
    }
}, [forma]);

async function generateDynamicPix() {
  /*
      version: '01' //versão do pix (não altere)
      key: chave pix
      name: seu nome/empresa
      city: sua cidade
      transactionId: é o identificador que aparecerá no momento do pix (max: 25 caracteres)
      message: mensagem que aparecerá no momento do pix (opcional)
      value: valor que você quer cobrar (opcional)
  */
  const qrCodePix = QrCodePix({
      version: '01',
      key: '75999715711',
      name: 'Inadilza Silva Santos',
      city: 'Aracaju',
      transactionId: 'rodriguesabner_',
      message: 'Recebidos da semana??? 😂',
      value: 1.00,
  })

  const rawPixStr = qrCodePix.payload()
  const qrCodeBase64 = await qrCodePix.base64()
  if (eVisivelPix) {
    setRawPix(rawPixStr)
    setQrCode(qrCodeBase64)  
  }
}



setTotalPrice(cartItems.reduce((acc, item) => item.price + acc, 0));


  return (
    <>
    <section className={`w-full max-w-[330px] bg-white h-screen fixed top-0 right-0 p-[100px_20px_20px] flex flex-col justify-between transform transition-all duration-400 ease ${isCartVisible ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex-grow overflow-auto">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>

      <div className="text-[1.8rem] font-medium py-[35px_0_15px] border-t border-gray-300">
        {formatCurrency(totalPrice, 'BRL')}
      </div>
      <button className="w-full p-3 bg-green-500 font-semibold text-lg text-white rounded-md" onClick={()=> setIsFormaVisible(true)} >Finalizar</button>
    </section>
      <div>
          {isFormaVisible ? formaPgto(totalPrice, isFormaVisible, setForma) : null}
          {eVisivelPix ? pix(totalPrice, eVisivelPix, qrCode, rawPix, fullPIX):null}
      </div>
    </>
  );
}

export default Cart;
