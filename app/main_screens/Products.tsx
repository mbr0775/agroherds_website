"use client";

import React from 'react';
import Image from 'next/image';

const Products = () => {
  const products = [
    {
      title: "Country Desi Chicken",
      description: "Slow-grown for 4-6 months, our hardy Desi chickens are raised with 20+ natural feeding methods. Premium quality with authentic taste.",
      price: "LKR 1,450/kg",
      features: ["Free-Range", "Hormone-Free", "4-6 Months Growth"],
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop",
      badge: "Premium"
    },
    {
      title: "Fresh Farm Eggs",
      description: "Daily collection from free-range country hens. Rich in nutrients and delivered fresh from our sustainable farms.",
      price: "LKR 50/egg",
      features: ["Daily Fresh", "Free-Range", "High Nutrition"],
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=800&auto=format&fit=crop",
      badge: "Daily Fresh"
    },
    {
      title: "Broiler Chicken",
      description: "Fast-growing hybrid birds ready in 6-8 weeks. Perfect for bulk orders and food service businesses.",
      price: "LKR 1,000/kg",
      features: ["Year Round", "Bulk Available", "Quick Delivery"],
      image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop",
      badge: "Available"
    },
    {
      title: "Goat Meat (Mutton)",
      description: "Lean, healthy meat from hardy Kalahari-Boer crossbreeds. Perfect for traditional Sri Lankan cuisine.",
      price: "LKR 1,200/kg",
      features: ["Seasonal", "Lean Meat", "Premium Quality"],
      image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80&w=800&auto=format&fit=crop",
      badge: "Seasonal"
    },
    {
      title: "Fresh Goat Milk",
      description: "Premium goat milk with exceptional health benefits. Higher in nutrients and easier to digest than cow's milk.",
      price: "Contact Us",
      features: ["Premium", "Health Benefits", "Limited Supply"],
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=800&auto=format&fit=crop",
      badge: "Premium"
    },
    {
      title: "Dairy Products",
      description: "Fresh cow's milk and artisanal dairy products from our crossbred Jersey-Friesian cows. Coming soon.",
      price: "LKR 130/L",
      features: ["Coming Soon", "Fresh Daily", "Organic"],
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=800&auto=format&fit=crop",
      badge: "Coming Soon"
    }
  ];

  return (
    <section id="products" className="py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-green-600 text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            Our Products
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Premium Quality
            <br />
            <span className="text-green-600">Farm Products</span>
          </h2>
          <p className="text-gray-600 text-xl font-light max-w-3xl mx-auto leading-relaxed">
            Fresh, sustainable, and delivered with care. From our farm to your table.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-[30px] overflow-hidden border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-green-600 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
                  {product.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-green-50 border border-green-200 rounded-full text-xs text-green-700 font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  <button className="text-sm uppercase tracking-wider text-gray-900 hover:text-green-600 transition font-semibold group-hover:translate-x-1 duration-300">
                    Order Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">Need bulk orders or custom requirements?</p>
          <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition uppercase tracking-widest text-sm shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
            Contact Us for Bulk Orders
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;