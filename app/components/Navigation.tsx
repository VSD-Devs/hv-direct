"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center mt-2">
            <Link href="/" className="h-12 flex items-center">
              <img 
                src="/images/hv-direct-logo.png" 
                alt="HV Direct Logo" 
                width={180} 
                height={60} 
                className="h-auto" 
              />
            </Link>
          </div>

          {/* Contact Info - Desktop Only */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#137DC5]/10 flex items-center justify-center">
                <div className="h-4 w-4 bg-[#137DC5] rounded-full"></div>
              </div>
              <div>
                <p className="text-gray-500">Call Us</p>
                <p className="font-medium">0800 123 4567</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#137DC5]/10 flex items-center justify-center">
                <div className="h-4 w-4 bg-[#137DC5] rounded-full"></div>
              </div>
              <div>
                <p className="text-gray-500">Email Us</p>
                <p className="font-medium">info@hvdirect.co.uk</p>
              </div>
            </div>
          </div>

          {/* Request Quote Button - Desktop Only */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center h-10 rounded-md px-6 text-sm font-medium bg-[#137DC5] hover:bg-[#0f5f96] text-white"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden h-10 w-10 flex items-center justify-center text-[#1a1a1a]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <div className="h-6 w-6 flex flex-col justify-center items-center">
                <span className="block h-0.5 w-6 bg-[#1a1a1a] rotate-45 translate-y-0.5"></span>
                <span className="block h-0.5 w-6 bg-[#1a1a1a] -rotate-45 -translate-y-0"></span>
              </div>
            ) : (
              <div className="h-6 w-6 flex flex-col justify-center items-center gap-1.5">
                <span className="block h-0.5 w-6 bg-[#1a1a1a]"></span>
                <span className="block h-0.5 w-6 bg-[#1a1a1a]"></span>
                <span className="block h-0.5 w-6 bg-[#1a1a1a]"></span>
              </div>
            )}
          </button>
        </div>
        
        {/* Main Navigation - Desktop */}
        <nav className="hidden md:block border-t">
          <ul className="flex items-center justify-center h-14">
            <li className="h-full">
              <Link 
                href="/" 
                className={`flex items-center h-full px-6 font-medium border-b-2 transition-colors ${
                  isActive("/") 
                    ? "text-[#137DC5] border-[#137DC5]" 
                    : "text-[#1a1a1a] hover:text-[#137DC5] border-transparent hover:border-[#137DC5]"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="h-full">
              <Link 
                href="/about" 
                className={`flex items-center h-full px-6 font-medium border-b-2 transition-colors ${
                  isActive("/about") 
                    ? "text-[#137DC5] border-[#137DC5]" 
                    : "text-[#1a1a1a] hover:text-[#137DC5] border-transparent hover:border-[#137DC5]"
                }`}
              >
                About HV Direct
              </Link>
            </li>
            <li className="h-full">
              <Link 
                href="/new-connections" 
                className={`flex items-center h-full px-6 font-medium border-b-2 transition-colors ${
                  isActive("/new-connections") 
                    ? "text-[#137DC5] border-[#137DC5]" 
                    : "text-[#1a1a1a] hover:text-[#137DC5] border-transparent hover:border-[#137DC5]"
                }`}
              >
                New Connections
              </Link>
            </li>
            <li className="h-full">
              <Link 
                href="/sectors" 
                className={`flex items-center h-full px-6 font-medium border-b-2 transition-colors ${
                  isActive("/sectors") 
                    ? "text-[#137DC5] border-[#137DC5]" 
                    : "text-[#1a1a1a] hover:text-[#137DC5] border-transparent hover:border-[#137DC5]"
                }`}
              >
                Sectors
              </Link>
            </li>
            <li className="h-full">
              <Link 
                href="/contact" 
                className={`flex items-center h-full px-6 font-medium border-b-2 transition-colors ${
                  isActive("/contact") 
                    ? "text-[#137DC5] border-[#137DC5]" 
                    : "text-[#1a1a1a] hover:text-[#137DC5] border-transparent hover:border-[#137DC5]"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            <li>
              <Link 
                href="/" 
                className={`block py-2 font-medium ${isActive("/") ? "text-[#137DC5]" : "text-[#1a1a1a] hover:text-[#137DC5]"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`block py-2 font-medium ${isActive("/about") ? "text-[#137DC5]" : "text-[#1a1a1a] hover:text-[#137DC5]"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About HV Direct
              </Link>
            </li>
            <li>
              <Link 
                href="/new-connections" 
                className={`block py-2 font-medium ${isActive("/new-connections") ? "text-[#137DC5]" : "text-[#1a1a1a] hover:text-[#137DC5]"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                New Connections
              </Link>
            </li>
            <li>
              <Link 
                href="/sectors" 
                className={`block py-2 font-medium ${isActive("/sectors") ? "text-[#137DC5]" : "text-[#1a1a1a] hover:text-[#137DC5]"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sectors
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`block py-2 font-medium ${isActive("/contact") ? "text-[#137DC5]" : "text-[#1a1a1a] hover:text-[#137DC5]"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="pt-4 border-t border-gray-100">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#137DC5]/10 flex items-center justify-center">
                    <div className="h-4 w-4 bg-[#137DC5] rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-gray-500">Call Us</p>
                    <a href="tel:08001234567" className="font-medium">0800 123 4567</a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#137DC5]/10 flex items-center justify-center">
                    <div className="h-4 w-4 bg-[#137DC5] rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-gray-500">Email Us</p>
                    <a href="mailto:info@hvdirect.co.uk" className="font-medium">info@hvdirect.co.uk</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 