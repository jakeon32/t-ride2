
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 bg-white z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="font-extrabold tracking-tighter text-2xl text-[#0f172a]">T-Ride<span className="text-blue-600">.</span></span>
        </div>

        <div className="hidden lg:flex items-center space-x-12 text-[13px] font-medium text-slate-600">
          <a href="#matching" className="hover:text-black transition-colors">Destinations</a>
          <a href="#inventory" className="hover:text-black transition-colors">Packages</a>
          <a href="#why" className="hover:text-black transition-colors">Why Us</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex relative">
            <input type="text" placeholder="Search for a place..." className="pl-4 pr-10 py-2.5 bg-slate-100 rounded-full text-xs font-medium w-64 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all" />
            <svg className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button className="text-[12px] font-bold text-white bg-[#0f172a] px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
            Book now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;