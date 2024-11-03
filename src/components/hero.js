"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  ChevronLeft,
  ChevronRight,
  Mailbox,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import slides from "../utils/slides";
import Image from "next/image";
import imgLogo from "@/public/assets/logo.png";
import { links } from "../utils/data";

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-[url('/assets/hero-photo.jpg')] text-white overflow-hidden">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-wider">
          <Image
            className="w-11 h-11 bg-white rounded-full"
            src={imgLogo}
            alt="logo-gym"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/shop" className="hover:text-primary">
            Shop
          </Link>
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </button>
          <button variant="ghost" size="icon" className="relative">
            <Mailbox className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-primary-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
              2
            </span>
          </button>
          <button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 flex p-8 left-0 right-0 w-full m-4 rounded-lg bg-slate-50 text-black z-50 md:hidden"
          >
            <div className="flex flex-col items-start py-4 space-y-4">
              {links.map(
                ({ href, label, icon, extraClasses, external }, index) => (
                  <Link
                    key={index}
                    href={href}
                    target={external ? "_blank" : "_self"}
                    className={extraClasses}
                    onClick={() => !external && setMobileMenuOpen(false)}
                  >
                    {icon}
                    {label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image with Parallax Effect */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 py-8 sm:py-0">
          <motion.h1
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-7xl font-bold tracking-wider mb-6"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-sm md:text-base mb-8 text-gray-300"
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="bg-[#c4f135] shadow-[0_0px_10px_2px_#c4f135] max-w-36 p-4 rounded-full text-black hover:bg-[#b3df2d] w-full sm:w-auto text-xs sm:text-sm md:text-base tracking-wider font-bold">
                START NOW
              </button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                variant="outline"
                className="border-white text-white flex justify-center items-center gap-2 hover:text-[#b3df2d] w-full sm:w-auto text-base tracking-widest sm:text-sm md:text-base"
              >
                LEARN MORE <ArrowUpRight />
              </button>
            </motion.div>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-20 flex gap-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="rounded-full hover:bg-white/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="rounded-full hover:bg-white/20"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scrolling Banner */}
        <div className="absolute bottom-0 w-full bg-[#c4f135] text-black py-2 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap font-medium">
            CONVENIENT LOCATION & SCHEDULE * DRAWING UP AN INDIVIDUAL TRAINING
            PROGRAM BEST PROFESSIONAL COACHES *&nbsp; CONVENIENT LOCATION &
            SCHEDULE * COCO GYM FITNESS * PLAYAS DEL COCO * GUANACASTE *&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}
