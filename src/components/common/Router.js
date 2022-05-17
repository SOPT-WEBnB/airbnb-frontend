import Home from 'pages/Home';
import Wish from 'pages/Wish';
import Room from 'pages/Room';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="/*" element={<p>Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
