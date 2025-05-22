"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Search, Home, Info, Phone, Zap, Building, Building2, Factory, CircleUser, Network } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Handle keyboard shortcut for search
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Site pages for search
  const sitePages = [
    {
      heading: "Main Pages",
      items: [
        { name: "Home", href: "/", icon: <Home className="mr-2 h-4 w-4" /> },
        { name: "About HV Direct", href: "/about", icon: <Info className="mr-2 h-4 w-4" /> },
        { name: "Contact Us", href: "/contact", icon: <Phone className="mr-2 h-4 w-4" /> },
        { name: "FAQ", href: "/faq", icon: <Info className="mr-2 h-4 w-4" /> },
      ],
    },
    {
      heading: "Services",
      items: [
        { name: "High Rise Residential", href: "/new-connections/high-rise-residential", icon: <Building2 className="mr-2 h-4 w-4" /> },
        { name: "New Build Housing", href: "/new-connections/new-build-housing", icon: <Building className="mr-2 h-4 w-4" /> },
        { name: "EV Charging Networks", href: "/new-connections/ev-charging-networks", icon: <Zap className="mr-2 h-4 w-4" /> },
        { name: "Diversions & Reinforcements", href: "/new-connections/diversions", icon: <Network className="mr-2 h-4 w-4" /> },
        { name: "Substation Installation", href: "/new-connections/substation-installation", icon: <Zap className="mr-2 h-4 w-4" /> },
      ],
    },
    {
      heading: "Sectors",
      items: [
        { name: "All Sectors", href: "/sectors", icon: <CircleUser className="mr-2 h-4 w-4" /> },
        { name: "Residential", href: "/sectors/residential", icon: <Building className="mr-2 h-4 w-4" /> },
        { name: "Commercial", href: "/sectors/commercial", icon: <Building2 className="mr-2 h-4 w-4" /> },
        { name: "Industrial", href: "/sectors/industrial", icon: <Factory className="mr-2 h-4 w-4" /> },
      ],
    },
  ];

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
              <Image 
                src="/images/hv-direct-logo.png" 
                alt="HV Direct Logo" 
                width={140} 
                height={60} 
                className="h-auto" 
                priority
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

          {/* Search and Request Quote - Desktop Only */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-1 justify-center h-10 rounded-md px-3 text-gray-600 hover:text-[#137DC5] hover:bg-[#137DC5]/10 transition-colors"
              aria-label="Search the site"
            >
              <Search className="h-4 w-4" />
            </button>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center h-10 rounded-md px-6 text-sm font-medium bg-[#137DC5] hover:bg-[#0f5f96] text-white"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-md text-[#137DC5] bg-[#137DC5]/10 hover:bg-[#137DC5]/20 transition-colors"
              aria-label="Search the site"
            >
              <Search className="h-4 w-4" />
            </button>
            <button 
              className="h-10 w-10 flex items-center justify-center text-[#1a1a1a]"
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
                href="/faq" 
                className={`flex items-center h-full px-6 font-medium border-b-2 transition-colors ${
                  isActive("/faq") 
                    ? "text-[#137DC5] border-[#137DC5]" 
                    : "text-[#1a1a1a] hover:text-[#137DC5] border-transparent hover:border-[#137DC5]"
                }`}
              >
                FAQ
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
                href="/sectors" 
                className={`block py-2 font-medium ${isActive("/sectors") ? "text-[#137DC5]" : "text-[#1a1a1a] hover:text-[#137DC5]"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sectors
              </Link>
            </li>
            <li>
              <Link 
                href="/faq" 
                className={`block py-2 font-medium ${isActive("/faq") ? "text-[#137DC5]" : "text-[#1a1a1a] hover:text-[#137DC5]"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
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

      {/* Site Search Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search across the site..." />
        <CommandList>
          <CommandEmpty>
            <div className="py-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500 mb-2">No results found</p>
              <p className="text-xs text-gray-400">Try searching for pages, services, or sectors</p>
            </div>
          </CommandEmpty>
          {sitePages.map((group) => (
            <CommandGroup key={group.heading} heading={group.heading}>
              {group.items.map((page) => (
                <CommandItem
                  key={page.href}
                  onSelect={() => {
                    router.push(page.href);
                    setOpen(false);
                  }}
                  className="flex items-center"
                >
                  {page.icon}
                  <span>{page.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          <div className="py-2 px-2 text-xs text-gray-400 border-t">
            <p>Press <kbd className="rounded px-1 py-0.5 bg-gray-100 text-xs">Esc</kbd> to close, <kbd className="rounded px-1 py-0.5 bg-gray-100 text-xs">↑</kbd><kbd className="rounded px-1 py-0.5 bg-gray-100 text-xs">↓</kbd> to navigate</p>
          </div>
        </CommandList>
      </CommandDialog>
    </header>
  );
} 