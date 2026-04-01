import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const DigitalCard = ({tools,carts,setCarts}) => {
    const  [isBuy ,setBuy] = useState(false)
    const buyNowBtn = ()=>{
        setBuy(true)
        const isAddad = carts.find(c => c.id === tools.id)
        if(isAddad){
             toast.warning("Already available in cart!")
             return
        }
        setCarts([...carts,tools])
         toast.success("Cart add successful !")
    }
    

    return (
        <div className="card  bg-base-100 shadow-sm relative">
                    <div className="card-body">
                        <div className='border-1 h-13 w-13 border-gray-200 rounded-full p-1 flex justify-center items-center'>
                            <img src={tools.icon} className=' object-contain ' alt={tools.tagType} />
                        </div>
                        <span className={`badge badge-soft ${tools.tag ==="New"? "badge-accent" : tools.tag ==="Popular" ? " badge-primary" :"badge-warning" } absolute right-3 top-2`}>{tools.
                            tag}</span>
                        <div className="flex justify-between">
                            <h2 className="text-3xl font-bold">{tools.name}</h2>

                        </div>
                        <p className='opacity-50'>{tools.description
                        }</p>
                        <span className="text-xl"><span className='text-3xl font-bold'>${tools.price
                        }</span>
                            <span className='opacity-50'>/{tools.period}</span>
                        </span>
                        <ul className="mt-6 flex flex-col gap-2 text-lg opacity-50">
                            {
                                tools.features.map((feature,index) => <li className='line-clamp-1' key={index}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{feature}</span>
                                </li>)

                            }

                        </ul>
                        <div className="mt-6">
                            <button onClick={buyNowBtn} className={`btn btn-primary border-none ${isBuy ? "bg-green-500": "bg-linear-to-r  from-[#4F39F6] to-[#9514FA]"} rounded-full btn-block  `}>{isBuy && <FaCheck />}{isBuy ? " Added to Cart!": "Buy Now"}</button>
                        </div>
                    </div>
                </div>
    );
};

export default DigitalCard;