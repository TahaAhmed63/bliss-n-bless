"use client";
import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import Footer from './Footer';
import { usePathname } from 'next/navigation';

const Layout = () => {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <Cart />
      {/* Replaced Outlet with pathname to handle navigation in Next.js */}
      {pathname === '/' ? <div>Home Content</div> : <div>Other Content</div>}
      <Footer />
    </>
  );
};

export default Layout;
