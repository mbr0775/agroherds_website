"use client";

import React, { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <circle cx="12" cy="12" r="2.5"/>
                <circle cx="6" cy="12" r="1.5"/>
                <circle cx="18" cy="12" r="1.5"/>
                <circle cx="12" cy="6" r="1.5"/>
                <circle cx="12" cy="18" r="1.5"/>
              </svg>
            </div>
            <span className="text-lg font-light tracking-[0.3em] uppercase text-white">Agroherds</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12 text-[13px] font-light tracking-widest uppercase">
            <a href="#home" className="text-white hover:text-green-400 transition">Home</a>
            <a href="#products" className="text-white hover:text-green-400 transition">Products</a>
            <a href="#destinations" className="text-white hover:text-green-400 transition">Destinations</a>
            <a href="#about" className="text-white hover:text-green-400 transition">About</a>
            <a href="#offers" className="text-white hover:text-green-400 transition">Offers</a>
            <a href="#contact" className="text-white hover:text-green-400 transition">Contact</a>
          </nav>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Search className="w-5 h-5 cursor-pointer text-white hover:text-green-400 transition" />
            <User className="w-5 h-5 cursor-pointer text-white hover:text-green-400 transition" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 space-y-4 text-center border-t border-gray-700">
            <a href="#home" className="block text-white hover:text-green-400 transition py-2">Home</a>
            <a href="#products" className="block text-white hover:text-green-400 transition py-2">Products</a>
            <a href="#destinations" className="block text-white hover:text-green-400 transition py-2">Destinations</a>
            <a href="#about" className="block text-white hover:text-green-400 transition py-2">About</a>
            <a href="#offers" className="block text-white hover:text-green-400 transition py-2">Offers</a>
            <a href="#contact" className="block text-white hover:text-green-400 transition py-2">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;