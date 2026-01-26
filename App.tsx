
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AirportDetails from './components/AirportDetails';
import LeisureDetails from './components/LeisureDetails';

const App: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airport" element={<AirportDetails />} />
        <Route path="/leisure" element={<LeisureDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
