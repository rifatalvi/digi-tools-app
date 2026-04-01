import React from 'react';

const Activeuser = () => {
    return (
        <div className='bg-linear-to-r  from-[#4F39F6] to-[#9514FA] p-15 mb-14'>
            <div className='flex lg:w-3xl mx-auto justify-between text-white text-center'>
            <div className='border-r border-b-blue-800 pr-4 md:pr-11 lg:pr-24'>
                <h2 className='text-3xl lg:text-5xl font-bold mb-4'>50k+</h2>
                <p className='lg:text-xl opacity-85'>Active Users</p>
            </div>
         
           <div className=' border-r border-b-blue-800 pr-4 md:pr-11 lg:pr-24'>
                <h2 className='text-3xl lg:text-5xl font-bold mb-4'>200+</h2>
                <p className='lg:text-xl opacity-85'>Active Users</p>
            </div>
               <div>
                <h2 className='text-3xl lg:text-5xl font-bold mb-4'>4.9</h2>
                <p className='lg:text-xl opacity-85'>Rating</p>
            </div>
        </div>
        </div>
    );
};

export default Activeuser;
