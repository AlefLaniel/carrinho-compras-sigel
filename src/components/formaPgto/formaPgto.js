import React from 'react';

//import AppContext from '../../contexts/AppContext';
import formatCurrency from '../../utils/formatCurrency';
//import { useNavigate } from 'react-router-dom';
import './formaPgto.css';

const FormaPgto = (total, isFormaVisible, setForma) => {
 

  const formas = (forma) => {
    setForma(forma);
  }

 return (
  <>
    <section className={`w-full max-w-[330px] bg-white h-screen fixed top-0 right-0 p-[100px_20px_20px] flex flex-col justify-between transform transition-all duration-400 ease  ${isFormaVisible ? 'translate-x-0' : 'translate-x-full'}`}>
      <div class="formaPgto">
          <img alt = "formaPgto" id="formas" src="formasPgto.png"/>
      </div>
      <div class="box" >
          <img alt = "formaPgto" src="pix.png" id="pix" className='cursor-pointer' onClick={  (e) => formas(e.target.id) } />
      </div>
      <div class="box">
          <img alt = "formaPgto" src="credcard.png"  id="cartao" className='cursor-pointer' onClick={ (e) => formas(e.target.id) } />
      </div>
      <div className="text-[1.8rem] font-medium py-[35px_0_15px] border-t border-gray-300">
        {formatCurrency(total, 'BRL')}
      </div>
    </section>
  </>
  );
    


}

export default FormaPgto;
