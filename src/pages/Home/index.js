import React from "react";
import Header from '../../components/Header/Header';
import Products from '../../components/Products/Products';
import Cart from '../../components/Cart/Cart';

const Home = () => {


  return (
    <div>
      <Header />
      <Products />
      <Cart />     
    </div>
    // <C.Container>
    //   <C.Title>Home</C.Title>
    //   <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
    //     Sair
    //   </Button>
    // </C.Container>
  );
};

export default Home;
