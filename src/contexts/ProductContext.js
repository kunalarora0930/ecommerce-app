import React, {createContext, useState, useEffect} from 'react';


export const ProductContext = createContext();

const ProductProvider = ({children}) => {
//Products state
  const [products, setProducts] = useState([]);

//This use Effect is for fetching the products
  useEffect(()=> {
    const fetchProducts = async ()=> {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data);
    };
    fetchProducts();
  })
  return <ProductContext.Provider value={{ products }}>
    {children}
  </ProductContext.Provider>
};

export default ProductProvider;
