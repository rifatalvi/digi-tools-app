import React from 'react';

const Transparent = () => {
    return (
        <div className='space-y-7 text-center bg-white py-17'>
            <h2 className='text-5xl font-bold '>Simple, Transparent Pricing</h2>
            <p className='opacity-80'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
           <div className='container mx-auto'>

             <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5' >

                  <div className="card  max-w-96   bg-[#F2F2F2] shadow-sm  text-left  rounded-3xl  ">
                    <div className="card-body">
                       
                        
                            <h2 className="text-xl font-bold">Starter</h2>
                           
                            
                        
                         <p className='opacity-70'>Perfect for getting started</p>
                        <span className="text-xl">$ <span className='text-3xl'>0</span> /Month</span>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>
                           
                           
                           
                        </ul>
                        <div className="mt-6">
                            <button className="btn  rounded-full bg-linear-to-r  from-[#4F39F6] to-[#9514FA] text-white btn-block ">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="card max-w-96 bg-base-100 shadow-sm relative text-left bg-linear-to-r  from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">
                    <div className="card-body">
                        <span className="badge badge-xs -top-3 right-17 md:right-29 lg:right-36 absolute badge-warning">Most Popular</span>
                        <div className="flex justify-between">
                            <h2 className="text-xl font-bold">Pro</h2>
                           
                            
                        </div>
                         <p className='opacity-70'>Best for professionals</p>
                        <span className="text-xl">$ <span className='text-3xl'>29</span> /Month</span>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                           
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                           
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advanced analytics</span>
                            </li>
                           
                        </ul>
                        <div className="mt-6">
                            <button className="btn text-[#9514FA] rounded-full btn-block ">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="card max-w-96 bg-[#F2F2F2] shadow-sm rounded-3xl text-left bg-linear-to-r  ">
                    <div className="card-body">
                       
                        <div className="flex justify-between">
                            <h2 className="text-xl font-bold">Enterprise</h2>
                           
                            
                        </div>
                         <p className='opacity-70'>For teams and businesses</p>
                        <span className="text-xl">$ <span className='text-3xl'>99</span> /Month</span>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                           
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SLA guarantee</span>
                            </li>
                           
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>
                           
                        </ul>
                        <div className="mt-6">
                            <button className="btn  rounded-full bg-linear-to-r  from-[#4F39F6] to-[#9514FA] text-white btn-block ">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Transparent;