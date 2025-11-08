"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Clock, Building2 } from 'lucide-react';

const Destinations = () => {
  const locations = [
    {
      name: "Polonnaruwa Head Office",
      region: "Polonnaruwa, Sri Lanka",
      description: "Our main headquarters and primary farming facility. State-of-the-art operations with integrated livestock management, research center, and administrative offices.",
      specialties: ["Head Office", "All Products", "Research Center"],
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1200&auto=format&fit=crop",
      contact: "+94 XXX XXX XXX",
      hours: "Mon-Sat: 7:00 AM - 6:00 PM",
      availability: "Main Facility",
      isHeadquarters: true
    },
    {
      name: "Colombo District Farm",
      region: "Colombo, Sri Lanka",
      description: "Urban farming facility specializing in fresh farm eggs and diverse poultry products. Convenient location for direct sales and distribution to Colombo markets.",
      specialties: ["Fresh Eggs", "Desi Chicken", "Direct Sales"],
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=1200&auto=format&fit=crop",
      contact: "+94 XXX XXX XXX",
      hours: "7:00 AM - 6:00 PM",
      availability: "Year Round"
    },
    {
      name: "Anuradhapura Farm",
      region: "Anuradhapura, Sri Lanka",
      description: "Premium country chicken breeding facility with traditional free-range methods. Home to our heritage Desi chicken flocks raised with 20+ natural feeding methods.",
      specialties: ["Desi Chicken", "Natural Feed", "Breeding"],
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200&auto=format&fit=crop",
      contact: "+94 XXX XXX XXX",
      hours: "6:00 AM - 5:00 PM",
      availability: "Year Round"
    },
    {
      name: "Kurunegala Region",
      region: "Kurunegala, Sri Lanka",
      description: "Specialized goat farming facility with hardy Kalahari-Boer crossbreeds. Perfect dry zone terrain for grazing and natural goat rearing with sustainable practices.",
      specialties: ["Goat Meat", "Goat Milk", "Dairy Products"],
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
      contact: "+94 XXX XXX XXX",
      hours: "7:00 AM - 5:00 PM",
      availability: "Seasonal Products"
    }
  ];

  return (
    <section id="destinations" className="py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-green-600 text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            Our Locations
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Farm
            <br />
            <span className="text-green-600">Destinations</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Visit our farms across Sri Lanka. Experience sustainable farming firsthand and see where your food comes from.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {locations.map((location, index) => (
            <div 
              key={index}
              className={`group relative rounded-[30px] overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl ${
                location.isHeadquarters 
                  ? 'bg-gradient-to-br from-green-50 to-white border-green-500' 
                  : 'bg-white border-gray-200 hover:border-green-500'
              }`}
            >
              {/* Image */}
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                
                {/* Availability Badge */}
                <div className={`absolute top-6 right-6 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm shadow-lg ${
                  location.isHeadquarters ? 'bg-green-600' : 'bg-orange-500'
                }`}>
                  {location.availability}
                </div>

                {/* Headquarters Badge */}
                {location.isHeadquarters && (
                  <div className="absolute top-6 left-6 flex items-center space-x-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-lg">
                    <Building2 className="w-4 h-4 text-green-600" />
                    <span className="text-gray-900 text-xs font-semibold uppercase tracking-wider">Head Office</span>
                  </div>
                )}

                {/* Location Pin */}
                <div className="absolute bottom-6 left-6 flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center border border-gray-200 shadow-lg">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-white text-sm font-medium drop-shadow-lg">{location.region}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{location.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {location.description}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {location.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-green-50 border border-green-200 rounded-full text-xs text-green-700 font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700 text-sm">{location.contact}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700 text-sm">{location.hours}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full mt-6 px-6 py-3 rounded-full font-semibold transition uppercase tracking-wider text-sm ${
                  location.isHeadquarters
                    ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg'
                    : 'bg-green-50 hover:bg-green-600 border-2 border-green-200 hover:border-green-600 text-green-700 hover:text-white'
                }`}>
                  {location.isHeadquarters ? 'Contact Head Office' : 'Get Directions'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Visit Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-[30px] p-12 border-2 border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Farms</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We welcome visitors to experience sustainable farming practices firsthand. Book a farm tour at our Polonnaruwa headquarters or any regional facility to see our natural feeding methods, meet our animals, and learn about integrated livestock farming.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <p className="text-gray-700">Guided tours available at Polonnaruwa Head Office (Mon-Sat)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <p className="text-gray-700">Educational programs for schools and agricultural groups</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <p className="text-gray-700">Direct farm purchases available at all locations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <p className="text-gray-700">See our 20+ natural feeding methods in action</p>
                </div>
              </div>
              <button className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition uppercase tracking-widest text-sm shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
                Book a Farm Tour
              </button>
            </div>
            <div className="relative h-[400px] rounded-[20px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop"
                alt="Farm Visit"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-lg font-semibold mb-2 drop-shadow-lg">Polonnaruwa Headquarters</p>
                <p className="text-gray-200 text-sm drop-shadow-lg">Experience our main facility with complete operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;