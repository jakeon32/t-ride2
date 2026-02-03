import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './components/Home';

const AirportDetails = React.lazy(() => import('./components/AirportDetails'));
const LeisureDetails = React.lazy(() => import('./components/LeisureDetails'));
const ShoppingDetails = React.lazy(() => import('./components/ShoppingDetails'));
const ThemeParkDetails = React.lazy(() => import('./components/ThemeParkDetails'));
const EventDetails = React.lazy(() => import('./components/EventDetails'));
const LocalTripDetails = React.lazy(() => import('./components/LocalTripDetails'));

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <Suspense fallback={<div className="min-h-screen bg-[var(--color-bg)]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/airport" element={<AirportDetails />} />
            <Route path="/leisure" element={<LeisureDetails />} />
            <Route path="/shopping" element={<ShoppingDetails />} />
            <Route path="/theme-park" element={<ThemeParkDetails />} />
            <Route path="/event" element={<EventDetails />} />
            <Route path="/local-trip" element={<LocalTripDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </LanguageProvider>
  );
};

export default App;
