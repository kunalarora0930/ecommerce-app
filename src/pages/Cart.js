import React, {useContext} from 'react'
import { Link } from 'react-router-dom';

import CartItem from '../components/CartItem'


import { CartContext } from '../contexts/CartContext';

const Cart = () => {
    const { cart, total }= useContext(CartContext)

  return (
    <section className='pt-32 py-16 lg:py-48 mx-auto container'> 
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
      {cart.map(item => {
        return <CartItem item={item} key={item.id} />
      })}
      </div>
    <div className='flex flex-col gap-y-3 py-4 mt-4'>
         <div className=' flex justify-between items-center'>
           {/* Total */}
           <div className='uppercase font-semibold '>
             <span className='mr-2'> Total:</span> $ {parseFloat(total).toFixed(2)}
           </div>
           {/* clear cart icon */}
         <Link to='/checkout' className='bg-primary flex p-4 justify-center text-white font-medium'>Checkout</Link>
        </div>
        </div>
        </section>

  )
}
export default Cart