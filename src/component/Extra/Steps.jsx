import React from 'react';
import user from '../../assets/user.png'
import Package from '../../assets/package.png'
import rocket from '../../assets/rocket.png'
const Steps = () => {
    return (
        <div className='space-y-7 text-center bg-[#F9FAFC] py-17'>
            <h2 className='text-4xl font-bold '>Get Started in 3 Steps</h2>
            <p>Start using premium digital tools in minutes, not hours.</p>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-5' >
                <div className='space-y-7 relative bg-white shadow-xl p-14 rounded-2xl flex flex-col items-center'>
                    <div className='bg-[#7e8a948a] p-4 rounded-full h-26 w-26 flex justify-center'>
                        <img src={user} alt="" />
                    </div>
                    <h2 className='text-2xl font-bold'>Create Account</h2>
                    <p className='opacity-65'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                    <p className='py-1 px-2 top-3 right-3 rounded-full text-white absolute bg-linear-to-r  from-[#4F39F6] to-[#9514FA]  mb-14'>01</p>
                </div> 
                <div className='space-y-7 relative bg-white shadow-xl p-14 rounded-2xl flex flex-col items-center'>
                    <div className='bg-[#7e8a948a]  p-4 rounded-full h-26 w-26 flex justify-center'>
                        <img src={Package} alt="" />
                    </div>
                    <h2 className='text-2xl font-bold'>Choose Products</h2>
                    <p className='opacity-65'>Browse our catalog and select the tools <br />that fit your needs.</p>
                    <p className='py-1 px-2 top-3 right-3 rounded-full text-white absolute bg-linear-to-r  from-[#4F39F6] to-[#9514FA]  mb-14'>01</p>
                </div> 
                <div className='space-y-7 relative bg-white shadow-xl p-14 rounded-2xl flex flex-col items-center'>
                    <div className='bg-[#7e8a948a]  p-4 rounded-full h-26 w-26 flex justify-center'>
                        <img src={rocket} alt="" />
                    </div>
                    <h2 className='text-2xl font-bold'>Start Creating</h2>
                    <p className='opacity-65'>Download and start using your premium <br /> tools immediately.</p>
                    <p className='py-1 px-2 top-3 right-3 rounded-full text-white absolute bg-linear-to-r  from-[#4F39F6] to-[#9514FA]  mb-14'>01</p>
                </div> 
              
                
            </div>
        </div>
    );
};

export default Steps;