import './pix.css'
import formatCurrency from '../../../utils/formatCurrency';
import PIX from "react-qrcode-pix";

const now = new Date().getTime().toString();
const Pix = (totalPrice, eVisivelPix, qrCode, rawPix,fullPIX) => {
//: JSX.Element {

    
    
        return (
           <section className={`w-full max-w-[330px] bg-white h-screen fixed top-0 right-0 p-[100px_20px_20px] flex flex-col justify-between transform transition-all duration-400 ease  ${eVisivelPix ? 'translate-x-0' : 'translate-x-full'}`}>
   
            <div className="formaPgto">
                <img alt = "formaPgto" id="formas" src="rpm.png"/>
            </div>
            <div class="box">
            <PIX
                    pixkey="+5575999715711"
                    merchant="Inadilza Silva Santos"
                    city="Alagoinhas"
                    cep="48.031-080"
                    code={"RPM" + now}
                    amount={totalPrice}
                    //onLoad={setFullPIX}

                    resize={300}
                    variant="fluid"
                    padding={30}
                    color="#357"
                    bgColor="#def"
                    bgRounded
                    divider
            />
                    
            </div>
            <div className="text-[1.8rem] font-medium py-[35px_0_15px] border-t border-gray-300">
                 {formatCurrency(totalPrice, 'BRL')}
            </div>
           </section>
        );
    
}

export default Pix