import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';

const Navbar = ({carts}) => {
    return (
        <div className="navbar bg-base-100 shadow-sm lg:px-24 sticky top-0 z-50">
            <div className="navbar-start  ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a href='#products'>Products</a></li>
                    <li><a href='#steps'>Features</a></li>
                    <li><a href='#pricing'>Pricing</a></li>
                    <li><a href='#activeuser'>Testimonials</a></li>
                    <li><a href='#footer'>FAQ</a></li>
                    </ul>
                </div>
                <a className="font-bold liner-gr text-xl  bg-linear-to-r text-transparent bg-clip-text from-[#4F39F6] to-[#9514FA]" href='#hero'>DigiTools</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='#products'>Products</a></li>
                    <li><a href='#steps'>Features</a></li>
                    <li><a href='#pricing'>Pricing</a></li>
                    <li><a href='#activeuser'>Testimonials</a></li>
                    <li><a href='#footer'>FAQ</a></li>

                </ul>
            </div>
            <div className="navbar-end gap-5 relative">
                <LuShoppingCart className='text-2xl' />
                   <span className='absolute top-0.5 right-44 bg-red-500 rounded-full font-light px-1.5 text-[12px] text-white'>{carts.length}</span>
              
                <h2>Login </h2>
                <a className="btn bg-linear-to-r  from-[#4F39F6] to-[#9514FA] text-white  rounded-full" href='#products'>Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;