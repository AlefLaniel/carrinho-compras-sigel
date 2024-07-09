import React, { useEffect, useContext } from 'react';

import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import AppContext from '../../contexts/AppContext';

function Products() {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);
  

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? 
        <div className="flex left-[40%] top-[50%] md:left-[45%] lg:left-[50%] fixed">

          <span className="animate-spin h-20 w-20 rounded-full border-8 border-current border-e-transparent align-[-0.125em] text-yellow-300 motion-reduce:animate-[spin_1.5s_linear_infinite]">


          </span>
        </div>
        : 
        <section className="pt-32 px-4 pb-12  grid grid-cols-1 gap-5 container mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
          {products.map((product) => <ProductCard key={product.id} data={product} />)}
        </section>
      }
    </>
    
  );
}

export default Products;
