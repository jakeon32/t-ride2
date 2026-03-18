import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './components/Home';

const AirportDetails = React.lazy(() => import('./components/AirportDetails'));
const LeisureDetails = React.lazy(() => import('./components/LeisureDetails'));
const ShoppingDetails = React.lazy(() => import('./components/ShoppingDetails'));
const ShoppingItemDetail = React.lazy(() => import('./components/shopping/ShoppingItemDetail'));
const ThemeParkDetails = React.lazy(() => import('./components/ThemeParkDetails'));
const EventDetails = React.lazy(() => import('./components/EventDetails'));
const EventItemDetail = React.lazy(() => import('./components/EventItemDetail'));
const LocalTripDetails = React.lazy(() => import('./components/LocalTripDetails'));
const Support = React.lazy(() => import('./components/Support'));
const MonaYongpyong = React.lazy(() => import('./components/leisure/MonaYongpyong'));
const High1 = React.lazy(() => import('./components/leisure/High1'));
const Alpensia = React.lazy(() => import('./components/leisure/Alpensia'));
const PhoenixPyeongchang = React.lazy(() => import('./components/leisure/PhoenixPyeongchang'));
const WellihilliPark = React.lazy(() => import('./components/leisure/WellihilliPark'));
const VivaldiPark = React.lazy(() => import('./components/leisure/VivaldiPark'));
const RamadaPyeongchang = React.lazy(() => import('./components/leisure/RamadaPyeongchang'));

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <Suspense fallback={<div className="min-h-screen bg-[var(--color-bg)]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/airport" element={<AirportDetails />} />
            <Route path="/leisure" element={<LeisureDetails />} />
            <Route path="/leisure/mona-yongpyong" element={<MonaYongpyong />} />
            <Route path="/leisure/high1" element={<High1 />} />
            <Route path="/leisure/alpensia" element={<Alpensia />} />
            <Route path="/leisure/phoenix-pyeongchang" element={<PhoenixPyeongchang />} />
            <Route path="/leisure/wellihilli-park" element={<WellihilliPark />} />
            <Route path="/leisure/vivaldi-park" element={<VivaldiPark />} />
            <Route path="/leisure/ramada-pyeongchang" element={<RamadaPyeongchang />} />
            <Route path="/shopping" element={<ShoppingDetails />} />
            <Route path="/shopping/:slug" element={<ShoppingItemDetail />} />
            <Route path="/theme-park" element={<ThemeParkDetails />} />
            <Route path="/event" element={<EventDetails />} />
            <Route path="/event/:id" element={<EventItemDetail />} />
            <Route path="/local-trip" element={<LocalTripDetails />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Suspense>
      </Router>
    </LanguageProvider>
  );
};

export default App;
