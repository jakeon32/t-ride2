
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-white pt-6 pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto relative cursor-pointer group">
        <div className="absolute inset-0 rounded-[2.5rem] bg-black/5 blur-2xl transform translate-y-4 md:translate-y-8 z-0"></div>
        <div className="relative h-[500px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2568&auto=format&fit=crop"
            alt="Landscape"
            className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 md:p-12 z-10">
            <h1 className="display-font text-[5rem] md:text-[11rem] font-bold text-white uppercase tracking-tighter leading-[0.85] drop-shadow-lg opacity-90">
              T-Ride
            </h1>
            <p className="text-white/90 text-sm md:text-lg font-medium max-w-xl mx-auto mt-4 md:mt-6 mb-8 drop-shadow-md leading-relaxed">
              Discover breathtaking destinations with curated tours,<br className="hidden md:block" /> local insights, and hassle-free planning all in one platform.
            </p>

            <div className="flex items-center space-x-4">
              <button className="bg-white text-slate-900 px-6 md:px-8 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                Plan Your Trip
              </button>
              <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 md:px-8 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide hover:bg-white/30 transition-all">
                Explore Destinations
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 z-10 hidden md:block">
            <span className="text-[10px] font-bold text-white/60 tracking-[0.2em] uppercase origin-bottom-right -rotate-90 block">Integrated Mobility</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
