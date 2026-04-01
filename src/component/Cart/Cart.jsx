import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { toast } from 'react-toastify';

const Cart = ({carts,setCarts}) => {
    const totalCount = carts.reduce((sum,cart)=> sum + cart.price ,0)
    const paymentBtn =()=>{
        setCarts([])
         toast.success("Payment Successful")
    }
    const cartDelete = (cart)=>{
       const filters = carts.filter(c => c.id !== cart.id)
        setCarts(filters)
         toast.error("Item Delete....!")
    }
    return (
        <div className='container mx-auto border-1 border-gray-300 rounded-2xl p-6 space-y-6'>
            <h2 className='font-bold text-3xl'>Your Cart</h2>
               {
                carts.length ===0 ? ( <div className='flex flex-col justify-center items-center py-24 '>
                    <FiShoppingCart className=' text-9xl opacity-55 mb-8' />
                    <p className='font-semibold text-2xl opacity-50'>Your cart is empty</p>
                </div> ): (
                    <>
                    
            {
                carts.map(cart=> <div className='flex justify-between bg-[#F9FAFC] p-6 items-center'>
                  <div className='flex gap-4 justify-center items-center'>
                      <img className='object-contain h-14 w-14 bg-white p-2 rounded-full' src={cart.icon} alt="" />
                    <div>
                        <h2 className='font-bold text-xl'>{cart.name}</h2>
                        <p className='opacity-60'>${cart.price}</p>
                    </div>
                  </div>
                    <button onClick={()=>cartDelete(cart)} className='text-red-500'  >Remove</button>
                    
                </div> )
            }
            <div className='flex justify-between'>
                        <h3 className='font-semibold opacity-70'>Total:</h3>
                        <h2 className='font-bold text-xl'>${totalCount}</h2>
                    </div>
                    <button onClick={paymentBtn} className='btn p-6 w-full rounded-full bg-linear-to-r  from-[#4F39F6] to-[#9514FA]  text-white'>Proceed to Checkout</button>
                    </>
                )
               }
        </div>
    );
};

export default Cart;