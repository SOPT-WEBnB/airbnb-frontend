import Home from 'pages/Home';
import Room from 'pages/Room';
import WishList from 'pages/WishList';
import React from 'react';
import Wish from 'pages/Wish';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/wish/:id" element={<Wish />} />
        <Route path="/wish/room/:id" element={<Room />} />
        <Route path="/*" element={<p>Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
