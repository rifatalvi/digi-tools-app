import React from 'react';
import banner from '../../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';
import icon from '../../assets/icon.png'
import Play from '../../assets/Play.png'
const Hero = () => {
  return (
    <div className="hero  mb-4 lg:my-50 container mx-auto ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
      <div className='bg-[#E1E7FF] rounded-full w-fit'>
            <p className='flex text-transparent bg-clip-text bg-linear-to-r  from-[#4F39F6] to-[#9514FA]  mb-3  px-3 py-1 gap-2'><img className='object-contain' src={icon} alt="" />
            New: AI-Powered Tools Available</p>
      </div>
          <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
          <p className="py-6">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.

            Explore Products
          </p>
          <button className="btn btn-primary mr-2 bg-linear-to-r  from-[#4F39F6] to-[#9514FA]  rounded-full">Explore Products</button>
          <button className='btn rounded-full border-2 border-[#4F39F6] text-transparent bg-clip-text bg-linear-to-r  from-[#4F39F6] to-[#9514FA] '> <img src={Play} alt="" /> Watch Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;