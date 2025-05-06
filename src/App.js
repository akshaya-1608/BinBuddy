//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CapturePage from './Capture';
import ResultPage from './Result';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/capture" element={<CapturePage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  </Router>
);

export default App;