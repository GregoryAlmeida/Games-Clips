import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ds3 from './components/home/pages/DS3/Ds3';
import Ets2 from './components/home/pages/ETS2/Ets2';
import NotFound from './components/home/pages/NOTFOUND/NotFound';
import SOTF from './components/home/pages/SOTF/SOTF';
import VALHEIM from './components/home/pages/VALHEIM/VALHEIM';

function App() {
  return (
    <section className="section-app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="ds3" element={<Ds3 />} />
          <Route path="ets2" element={<Ets2 />} />
          <Route path="sotf" element={<SOTF />} />
          <Route path="valheim" element={<VALHEIM />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;
