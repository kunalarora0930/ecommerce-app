import React, {createContext, useState, useEffect} from 'react';
import { v4 } from 'uuid';


export const CartContext = createContext()

const CartProvider = ({children}) => {
  //cart state
  const [cart, setCart] = useState([])
  //item amount state 
  const [itemAmount, setItemAmount] = useState(0)
  //total price
  const [total, setTotal] = useState(0)
  //total price
  const [shipping, setShipping] = useState(0)


  //get product id
  const linkIds = (uuid, productId) => {
    return { uuid, productId };
  };
  console.log(linkIds)

  useEffect(()=> {
    const total = cart.reduce((accumulator, currentItem)=> {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
     setTotal(total)
  })

  // update item amount on bag
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem)=>{
        return accumulator + currentItem.amount
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])

  //add to cart option
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1 }  
    //This will check if the item is already in the cart
     const cartItem = cart.find((item) => {
      return item.id === id
     })
     if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1};
        } else {
          return item;
        }
      })
      setCart(newCart)
     } else {
      setCart([...cart, newItem])
     }
  }

  // remove from cart 
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id
    })
    setCart(newCart)
  }

  //clear cart
   const clearCart = () => {
    setCart([])
   }

   //increase amount
   const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id)
     addToCart(cartItem, id)
   }

   //decrease amount
   const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
    return item.id === id;
    })
    if(cartItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return {...item, amount: cartItem.amount -1}
        } else {
          return item
        }
      })
      setCart(newCart)
    } 
      if (cartItem.amount < 2) {
        removeFromCart(id)
      }
   }

    return <CartContext.Provider 
    value={{
     cart, 
     addToCart,
     removeFromCart, 
     clearCart, 
     increaseAmount, 
     decreaseAmount, 
     itemAmount, 
     total, 
     shipping 
     }}>
    {children}
  </CartContext.Provider>
};

export default CartProvider;
