import React from 'react';

const Optional = () => {
    return (
        <div className='bg-linear-to-r  from-[#4F39F6] to-[#9514FA] p-15 text-center text-white space-y-6'>
            <h2 className='font-bold text-4xl '>Ready to Transform Your Workflow?</h2>
            <p className='opacity-85'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            <div>
                <button className='btn bg-white text-[#9514FA] mr-3 rounded-full mb-2'>Explore Products</button>
                <button className='btn bg-transparent text-white rounded-full mb-2'>View Pricing</button>

            </div>
            <p className='opacity-60'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Optional;