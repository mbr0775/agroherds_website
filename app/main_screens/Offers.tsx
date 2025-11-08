"use client";

import React from 'react';
import Image from 'next/image';
import { Tag, Gift, TrendingDown, Clock, LucideIcon } from 'lucide-react';

const Offers = () => {
  const offers: Array<{
    title: string;
    subtitle: string;
    description: string;
    discount: string;
    terms: string;
    validity: string;
    image: string;
    icon: LucideIcon;
    color: 'orange' | 'green' | 'blue' | 'purple';
  }> = [
    {
      title: "Bulk Order Discount",
      subtitle: "Save up to 15% on large orders",
      description: "Perfect for restaurants, hotels, and catering businesses. Order 50kg or more and get exclusive wholesale pricing.",
      discount: "15% OFF",
      terms: "Minimum order 50kg",
      validity: "Valid for HORECA customers",
      image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop",
      icon: TrendingDown,
      color: "orange" as const
    },
    {
      title: "Weekly Fresh Egg Bundle",
      subtitle: "Subscribe and save",
      description: "Get 100 fresh eggs delivered weekly to your doorstep. Perfect for families and small businesses.",
      discount: "LKR 4,500",
      terms: "Regular Price: LKR 5,000",
      validity: "Weekly subscription",
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=800&auto=format&fit=crop",
      icon: Gift,
      color: "green" as const
    },
    {
      title: "Premium Desi Chicken Pack",
      subtitle: "Family value pack",
      description: "Get 5kg of premium country chicken with complimentary delivery. Limited time offer for new customers.",
      discount: "Free Delivery",
      terms: "On orders above LKR 7,000",
      validity: "New customers only",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop",
      icon: Tag,
      color: "blue" as const
    },
    {
      title: "Seasonal Goat Meat Sale",
      subtitle: "Festival special pricing",
      description: "Premium goat meat at special rates during festive seasons. Pre-order now for Sinhala New Year and Eid.",
      discount: "Special Rate",
      terms: "LKR 1,100/kg",
      validity: "Festival seasons only",
      image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80&w=800&auto=format&fit=crop",
      icon: Clock,
      color: "purple" as const
    }
  ];

  const colorClasses = {
    orange: {
      badge: "bg-orange-500",
      border: "border-orange-500/20",
      bg: "bg-orange-500/10",
      text: "text-orange-500"
    },
    green: {
      badge: "bg-green-500",
      border: "border-green-500/20",
      bg: "bg-green-500/10",
      text: "text-green-500"
    },
    blue: {
      badge: "bg-blue-500",
      border: "border-blue-500/20",
      bg: "bg-blue-500/10",
      text: "text-blue-500"
    },
    purple: {
      badge: "bg-purple-500",
      border: "border-purple-500/20",
      bg: "bg-purple-500/10",
      text: "text-purple-500"
    }
  };

  return (
    <section id="offers" className="py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-green-600 text-sm uppercase tracking-[0.3em] mb-4 font-light">
            Special Offers
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Exclusive Deals &
            <br />
            <span className="text-green-600">Promotions</span>
          </h2>
          <p className="text-gray-600 text-xl font-light max-w-3xl mx-auto">
            Take advantage of our limited-time offers and save on premium quality farm products
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {offers.map((offer, index) => {
            const colors = colorClasses[offer.color];
            const IconComponent = offer.icon;
            
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-[30px] overflow-hidden border border-gray-300 hover:border-green-500 transition-all duration-300 shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image Side */}
                  <div className="relative h-[300px] md:h-auto overflow-hidden">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                    
                    {/* Discount Badge */}
                    <div className={`absolute top-6 left-6 ${colors.badge} px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-white shadow-lg`}>
                      {offer.discount}
                    </div>

                    {/* Icon */}
                    <div className={`absolute bottom-6 left-6 w-14 h-14 ${colors.bg} rounded-full flex items-center justify-center border ${colors.border}`}>
                      <IconComponent className={`w-7 h-7 ${colors.text}`} />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                    <p className={`text-sm font-semibold ${colors.text} mb-4 uppercase tracking-wider`}>
                      {offer.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">
                      {offer.description}
                    </p>

                    {/* Terms */}
                    <div className="space-y-2 mb-6 pb-6 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-light">Terms</span>
                        <span className="text-sm text-gray-700 font-light">{offer.terms}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-light">Validity</span>
                        <span className="text-sm text-gray-700 font-light">{offer.validity}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full px-6 py-3 ${colors.bg} hover:${colors.badge} border ${colors.border} hover:border-transparent ${colors.text} hover:text-white rounded-full font-semibold transition uppercase tracking-wider text-sm`}>
                      Claim Offer
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-[30px] p-12 lg:p-16 text-center">
          <h3 className="text-4xl font-bold text-white mb-4">Never Miss a Deal</h3>
          <p className="text-green-100 text-lg font-light mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive offers, new products, and farm updates
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 backdrop-blur-sm font-light"
            />
            <button className="px-10 py-4 bg-white text-green-600 rounded-full font-bold hover:bg-gray-100 transition uppercase tracking-widest text-sm whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          <p className="text-green-100 text-xs font-light mt-4">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
              <Tag className="w-8 h-8 text-green-500" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Best Price Guarantee</h4>
            <p className="text-gray-600 text-sm font-light">
              We match competitor prices on equivalent products
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
              <Gift className="w-8 h-8 text-green-500" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Loyalty Rewards</h4>
            <p className="text-gray-600 text-sm font-light">
              Earn points with every purchase and redeem for discounts
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
              <Clock className="w-8 h-8 text-green-500" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Seasonal Specials</h4>
            <p className="text-gray-600 text-sm font-light">
              Exclusive deals during festivals and special occasions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;