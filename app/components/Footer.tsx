import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 mr-3 rounded-full border-2 border-[#137DC5] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="#137DC5" />
                    </svg>
                  </div>
                </div>
                <span className="text-xl font-bold">HV Direct</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Providing reliable and efficient electrical connections across the UK for residential, commercial, and industrial projects.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-[#137DC5]/20 flex items-center justify-center hover:bg-[#137DC5]/30 transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-[#137DC5]/20 flex items-center justify-center hover:bg-[#137DC5]/30 transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-[#137DC5]/20 flex items-center justify-center hover:bg-[#137DC5]/30 transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/new-connections" className="text-gray-400 hover:text-white transition-colors">New Connections</Link>
              </li>
              <li>
                <Link href="/sectors" className="text-gray-400 hover:text-white transition-colors">Sectors</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/new-connections/high-rise-residential" className="text-gray-400 hover:text-white transition-colors">High-Rise Residential</Link>
              </li>
              <li>
                <Link href="/new-connections/new-build-housing" className="text-gray-400 hover:text-white transition-colors">New Build Housing</Link>
              </li>
              <li>
                <Link href="/new-connections/ev-charging-networks" className="text-gray-400 hover:text-white transition-colors">EV Charging Networks</Link>
              </li>
              <li>
                <Link href="/new-connections/substation-installation" className="text-gray-400 hover:text-white transition-colors">Substation Installation</Link>
              </li>
              <li>
                <Link href="/new-connections/low-voltage-diversions" className="text-gray-400 hover:text-white transition-colors">Diversions & Reinforcements</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-[#137DC5]/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-400">123 Business Park, London, SW1A 1AA</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-[#137DC5]/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-400">0800 123 4567</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-[#137DC5]/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-400">info@hvdirect.co.uk</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-[#137DC5]/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="ml-3 text-gray-400">Mon-Fri: 8am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar and Copyright */}
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <p>&copy; {new Date().getFullYear()} HV Direct. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 