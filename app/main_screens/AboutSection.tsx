"use client";

import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Content */}
          <div>
            <p className="text-green-600 text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
              About Agroherds
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900">
              Pioneering Sustainable
              <br />
              <span className="text-green-600">Livestock Farming</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Agroherds is transforming livestock farming in Sri Lanka through innovative, sustainable practices. Starting with 1,000 Desi chickens, we are building an integrated farm that combines poultry, goats, and dairy production.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
              We use 20+ natural feeding methods including Moringa cultivation, insect farming (Black Soldier Fly), fermented feeds, and aquatic plants like Azolla. Our zero-waste approach recycles manure as fertilizer and uses crop residues across species, ensuring the healthiest animals and finest quality products.
            </p>
            
            {/* Statistics Grid */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-center lg:text-left">
                <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">1000+</div>
                <p className="text-xs text-gray-600 uppercase tracking-wider font-medium">Desi Chickens</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">20+</div>
                <p className="text-xs text-gray-600 uppercase tracking-wider font-medium">Natural Methods</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">100%</div>
                <p className="text-xs text-gray-600 uppercase tracking-wider font-medium">Sustainable</p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                </div>
                <p className="text-gray-700">Integrated farming with synergies across poultry, goats, and dairy</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                </div>
                <p className="text-gray-700">Direct farm-to-table supply for hotels, restaurants, and local markets</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                </div>
                <p className="text-gray-700">Strict biosecurity and comprehensive vaccination schedules</p>
              </div>
            </div>

            <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition uppercase tracking-widest text-sm shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
              Learn More About Us
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-[30px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1000&auto=format&fit=crop"
                alt="Agroherds Farm"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-lg rounded-[20px] p-6 border border-gray-200 shadow-xl">
              <p className="text-green-600 text-sm font-semibold mb-2">Our Mission</p>
              <p className="text-gray-900 text-lg font-semibold">
                Meeting Sri Lanka s demand with premium, traceable, locally-raised livestock products
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-[20px] p-8 border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Natural Feeding</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Moringa trees, sweet potato vines, Azolla ponds, and fermented feeds ensure optimal nutrition
            </p>
          </div>
          <div className="bg-white rounded-[20px] p-8 border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
            <div className="text-4xl mb-4">🐔</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Hardy Desi chickens, Kalahari-Boer goats, and crossbred dairy cows for superior products
            </p>
          </div>
          <div className="bg-white rounded-[20px] p-8 border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
            <div className="text-4xl mb-4">♻️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Zero Waste</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Complete recycling system using manure as fertilizer and crop residues as animal feed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;