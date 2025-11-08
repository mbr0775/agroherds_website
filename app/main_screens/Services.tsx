"use client";

import { use, useState } from "react";
import { Beef, Egg, Milk, Leaf, Heart, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Egg,
    title: "Country (Desi) Chicken & Eggs",
    subtitle: "Premium Free-Range Poultry",
    description: "Locally raised country chickens that grow naturally over 4-6 months, producing superior taste and quality. Our hardy birds are raised without hormones, yielding both premium meat and nutritious eggs.",
    features: [
      "Slow-grown for 4-6 months",
      "Market weight: 1.5-2 kg",
      "Daily fresh eggs from free-range hens",
      "10-20% premium quality over broilers",
      "Rich in nutrients and authentic flavor"
    ],
    price: "LKR 1,450/kg",
    eggPrice: "LKR 50/egg",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop",
    color: "from-amber-500 to-orange-600"
  },
  {
    id: 2,
    icon: Beef,
    title: "Premium Broiler Chicken",
    subtitle: "Fast-Growing Hybrid Birds",
    description: "High-quality broiler chickens (Cobb/Ross strains) raised in ventilated sheds with strict biosecurity. Ready in 6-8 weeks, our broilers offer consistent quality and tender meat for your daily needs.",
    features: [
      "Multi-cycle production year-round",
      "Market ready in 6-8 weeks",
      "Weight: 2.0-2.5 kg per bird",
      "Available in various cuts",
      "Fresh or frozen packaging"
    ],
    price: "LKR 1,000/kg",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop",
    color: "from-rose-500 to-red-600"
  },
  {
    id: 3,
    icon: Beef,
    title: "Goat Meat & Milk",
    subtitle: "Dual-Purpose Goat Products",
    description: "Hardy Kalahari-Boer crossbreed goats raised on natural pasture and forage. Our goats provide lean, healthy mutton perfect for traditional Sri Lankan cuisine, plus fresh goat milk rich in nutrients.",
    features: [
      "Mature weight: 25-30 kg",
      "Lean, healthy meat",
      "Fresh goat milk: 3-4 L/day",
      "Naturally grazed and foraged",
      "Perfect for festive occasions"
    ],
    price: "LKR 1,200/kg",
    milkPrice: "Contact Us",
    image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80&w=800&auto=format&fit=crop",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 4,
    icon: Milk,
    title: "Fresh Dairy Products",
    subtitle: "From Our Milking Cows",
    description: "High-quality milk from crossbred Jersey/Friesian cows, producing 10-15 liters daily. We offer fresh raw milk and value-added products like yogurt and cheese, all produced with the highest standards.",
    features: [
      "3,000-5,000 L per cow annually",
      "Fresh raw milk daily",
      "Artisanal yogurt & cheese",
      "Strictly quality controlled",
      "Local delivery available"
    ],
    price: "LKR 120-150/L",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=800&auto=format&fit=crop",
    color: "from-blue-500 to-indigo-600"
  }
];

const benefits = [
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "Integrated farming with natural feed methods using Moringa, sweet potato vines, and leguminous fodder trees"
  },
  {
    icon: Heart,
    title: "No Hormones",
    description: "All our livestock are raised naturally without hormones or artificial growth promoters"
  },
  {
    icon: CheckCircle2,
    title: "Quality Assured",
    description: "Strict biosecurity, regular vaccinations, and meticulous health monitoring for every animal"
  }
];

export default function OurServices() {
  const [activeService, setActiveService] = useState(1);

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 md:py-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-green-600 font-semibold uppercase tracking-wider text-sm mb-3">
            Our Products & Services
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Premium Livestock Products
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From free-range country chickens to fresh dairy, Agroherds delivers high-quality, 
            locally-raised livestock products to meet Sri Lankas growing demand for sustainable protein.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                activeService === service.id ? 'ring-4 ring-green-500 scale-[1.02]' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40 group-hover:opacity-50 transition-opacity`} />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-8 h-8 text-green-600" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  {service.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div>
                    <p className="text-2xl font-bold text-green-600">{service.price}</p>
                    {service.eggPrice && (
                      <p className="text-sm text-gray-500 mt-1">Eggs: {service.eggPrice}</p>
                    )}
                    {service.milkPrice && (
                      <p className="text-sm text-gray-500 mt-1">Milk: {service.milkPrice}</p>
                    )}
                  </div>
                  <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Choose Agroherds?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                <p className="text-green-50 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-xl mb-6">
              Supplying fresh, high-quality livestock products to hotels, restaurants, 
              markets, and food processors across Sri Lanka.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-green-600 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                View All Products
              </button>
              <button className="px-8 py-4 bg-green-800 text-white rounded-lg font-bold hover:bg-green-900 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-bold text-green-600 mb-2">1,000+</p>
            <p className="text-gray-600 font-medium">Country Chickens</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-green-600 mb-2">20+</p>
            <p className="text-gray-600 font-medium">Goat Herd</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-green-600 mb-2">15,000L</p>
            <p className="text-gray-600 font-medium">Annual Milk</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-green-600 mb-2">100%</p>
            <p className="text-gray-600 font-medium">Hormone Free</p>
          </div>
        </div>
      </div>
    </section>
  );
}