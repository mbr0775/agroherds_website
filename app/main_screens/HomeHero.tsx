"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Navigation,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface Card {
  title: string;
  subtitle: string;
  status: string;
  price: string;
  badge: string;
  image: string;
  link: string;
}

interface Slide {
  location: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cards: Card[];
}

const slides: Slide[] = [
  {
    location: "Colombo District – Sri Lanka",
    title: "FRESH FARM",
    subtitle: "EGGS",
    description:
      "Daily fresh eggs from free-range country hens. Rich in nutrients and delivered straight from our sustainable farms.",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2000&auto=format&fit=crop",
    cards: [
      {
        title: "GOAT MEAT",
        subtitle: "MUTTON",
        status: "SEASONAL AVAILABLE",
        price: "LKR 1,200/kg",
        badge: "Seasonal",
        image:
          "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80&w=600&auto=format&fit=crop",
        link: "VIEW DETAILS",
      },
      {
        title: "GOAT MILK",
        subtitle: "DAIRY",
        status: "PREMIUM QUALITY",
        price: "Contact Us",
        badge: "Premium",
        image:
          "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=600&auto=format&fit=crop",
        link: "VIEW DETAILS",
      },
      {
        title: "BROILER",
        subtitle: "CHICKEN",
        status: "YEAR ROUND",
        price: "LKR 1,000/kg",
        badge: "Available",
        image:
          "https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=600&auto=format&fit=crop",
        link: "VIEW DETAILS",
      },
    ],
  },
  {
    location: "Anuradhapura Farm – Sri Lanka",
    title: "COUNTRY DESI",
    subtitle: "CHICKEN",
    description:
      "Premium slow-grown chickens raised with 20+ natural feeding methods. Hardy, flavorful, and hormone-free for authentic taste.",
    image:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2000&auto=format&fit=crop",
    cards: [
      {
        title: "DESI CHICKEN",
        subtitle: "COUNTRY BREED",
        status: "PREMIUM QUALITY",
        price: "LKR 1,450/kg",
        badge: "Premium",
        image:
          "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=600&auto=format&fit=crop",
        link: "VIEW DETAILS",
      },
      {
        title: "FRESH EGGS",
        subtitle: "FREE RANGE",
        status: "DAILY COLLECTION",
        price: "LKR 50/egg",
        badge: "Daily Fresh",
        image:
          "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=600&auto=format&fit=crop",
        link: "VIEW DETAILS",
      },
      {
        title: "GOAT MEAT",
        subtitle: "MUTTON",
        status: "SEASONAL AVAILABLE",
        price: "LKR 1,200/kg",
        badge: "Seasonal",
        image:
          "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80&w=600&auto=format&fit=crop",
        link: "VIEW DETAILS",
      },
    ],
  },
  {
    location: "Kurunegala Region – Sri Lanka",
    title: "PREMIUM GOAT",
    subtitle: "PRODUCTS",
    description:
      "Lean goat meat and fresh goat milk from hardy Kalahari-Boer crossbreeds. Perfect for traditional Sri Lankan cuisine.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2000&auto=format&fit=crop",
    cards: [
      {
        title: "BROILER",
        subtitle: "CHICKEN",
        status: "YEAR ROUND",
        price: "LKR 1,000/kg",
        badge: "Available",
        image:
          "https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=600&auto=format&fit=crop",
        link: "VIEW DETAILS",
      },
      {
        title: "GOAT MILK",
        subtitle: "DAIRY",
        status: "PREMIUM QUALITY",
        price: "Contact Us",
        badge: "Premium",
        image:
          "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=600&auto=format&fit=crop",
        link: "VIEW DETAILS",
      },
      {
        title: "DESI CHICKEN",
        subtitle: "COUNTRY BREED",
        status: "PREMIUM QUALITY",
        price: "LKR 1,450/kg",
        badge: "Premium",
        image:
          "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=600&auto=format&fit=crop",
        link: "VIEW DETAILS",
      },
    ],
  },
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(currentSlide);
  }, [currentSlide, emblaApi]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const data = slides[currentSlide];
  const next = slides[(currentSlide + 1) % slides.length];

  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden pt-14 md:pt-20">
      {/* NEXT SLIDE (faint) – desktop only */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src={next.image}
          alt="next"
          fill
          className="object-cover opacity-30 scale-105 blur-sm"
        />
      </div>

      {/* CURRENT BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:to-transparent" />
      </div>

      {/* DISCOVER LOCATION */}
      <div className="absolute top-2 left-3 md:top-6 md:left-8 lg:left-16 flex items-center gap-2 z-20">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex items-center justify-center text-xs md:text-sm font-light text-white">
          {String(currentSlide + 1).padStart(2, "0")}
        </div>
        <button className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white hover:text-green-400 transition font-light">
          Discover Location
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 w-full items-center">
          {/* LEFT – TEXT */}
          <div className="max-w-xl text-center md:text-left">
            <p className="text-[9px] md:text-[11px] tracking-[0.3em] mb-2 md:mb-4 text-gray-300 uppercase font-light">
              {data.location}
            </p>
            <h1 className="text-[42px] leading-[0.9] md:text-[80px] lg:text-[100px] font-bold tracking-tight text-white">
              {data.title}
              <br />
              <span className="text-[36px] md:text-[70px] lg:text-[90px]">{data.subtitle}</span>
            </h1>
            <p className="mt-3 md:mt-5 text-xs md:text-sm text-gray-300 max-w-xs md:max-w-md mx-auto md:mx-0 leading-relaxed font-light">
              {data.description}
            </p>
          </div>

          {/* RIGHT – CARDS */}
          <div className="md:flex md:justify-end">
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 md:gap-12 max-w-5xl">
              {data.cards.map((c, i) => (
                <CardItem key={i} {...c} isMobile={false} />
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {data.cards.map((c, i) => (
                  <div key={i} className="flex-[0_0_78%] min-w-0 pl-3">
                    <CardItem {...c} isMobile={true} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODERN FLOATING NAV – sits above cards */}
      <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-30">
        <div className="flex items-center gap-4 px-6 py-3 bg-black/30 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
          <button
            onClick={prevSlide}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>

          <div className="flex gap-1">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === i ? "w-6 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* COMPASS */}
      <div className="absolute bottom-4 md:bottom-8 left-3 md:left-8 lg:left-16 z-20">
        <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm">
          <Navigation className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
        </div>
      </div>
    </section>
  );
}

/* CARD COMPONENT – price never hidden */
function CardItem({ title, subtitle, status, price, badge, image, link, isMobile }: Card & { isMobile: boolean }) {
  return (
    <div
      className={`relative w-full ${isMobile ? "h-[320px]" : "h-[440px]"} rounded-[16px] md:rounded-[20px] overflow-hidden group cursor-pointer`}
      style={{
        background: "rgba(30,30,30,0.6)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-orange-500 px-2 py-0.5 md:px-2.5 md:py-1 rounded-full text-[8px] md:text-[9px] font-semibold tracking-wider uppercase text-white z-10">
        {badge}
      </div>

      {/* CONTENT – extra bottom padding for floating nav */}
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 pb-20 md:pb-24 z-10">
        <p className="text-[7px] md:text-[8px] tracking-[0.2em] text-gray-300 mb-1.5 md:mb-2 uppercase font-light">
          {status}
        </p>
        <h3 className="text-lg md:text-xl font-bold mb-0.5 leading-tight tracking-tight text-white">
          {title}
        </h3>
        <p className="text-sm md:text-base font-light mb-2 md:mb-3 tracking-wide text-white">
          {subtitle}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-base md:text-lg font-bold text-green-400">{price}</span>
          <button className="text-[8px] md:text-[9px] uppercase tracking-wider text-white hover:text-green-400 transition font-light">
            {link}
          </button>
        </div>
      </div>
    </div>
  );
}