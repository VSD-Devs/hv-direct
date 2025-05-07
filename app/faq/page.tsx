"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function FAQPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState<any[]>([]);

  // Define all FAQ categories
  const categories = [
    { id: "general", name: "General Questions" },
    { id: "new-connections", name: "New Connections" },
    { id: "residential", name: "Residential Services" },
    { id: "commercial", name: "Commercial Services" },
    { id: "ev-charging", name: "EV Charging" },
    { id: "substation", name: "Substation Installation" },
  ];

  // Define all FAQs
  const faqs = {
    general: [
      {
        question: "What is an Independent Connection Provider (ICP)?",
        answer: "An Independent Connection Provider (ICP) is a company that has been accredited to design and build electricity networks that connect to the local Distribution Network. HV Direct is an ICP that specialises in providing electrical connections for residential, commercial, and industrial projects."
      },
      {
        question: "How long does a typical connection project take?",
        answer: "The timeline for connection projects varies depending on the scope and complexity. Small residential connections might take a few weeks, while large commercial or industrial connections could take several months. We provide detailed timelines during the initial consultation phase."
      },
      {
        question: "What areas do you serve?",
        answer: "We provide electrical connection services throughout the UK, working with all Distribution Network Operators (DNOs)."
      },
      {
        question: "Do you work with all UK Distribution Network Operators (DNOs)?",
        answer: "Yes, we are accredited to work with all UK Distribution Network Operators (DNOs), allowing us to provide connection services nationwide."
      },
      {
        question: "What accreditations does HV Direct hold?",
        answer: "HV Direct holds all required accreditations for electrical connection works, including NERS (National Electricity Registration Scheme) accreditation, which allows us to work on electrical networks across the UK."
      }
    ],
    "new-connections": [
      {
        question: "What types of new connection services do you offer?",
        answer: "We offer a comprehensive range of new connection services, including low voltage and high voltage connections for residential developments, commercial properties, industrial sites, and EV charging infrastructure."
      },
      {
        question: "What is the process for getting a new connection?",
        answer: "The process typically involves an initial consultation, site survey, design phase, quotation, acceptance, and then the installation work. We guide you through each step to ensure a smooth and efficient process."
      },
      {
        question: "How do I know what capacity I need for my connection?",
        answer: "Our engineers will assess your electrical requirements based on the intended use of the property, expected load, and future expansion plans. We provide expert guidance to ensure your connection meets both current and future needs."
      }
    ],
    residential: [
      {
        question: "Can you install both temporary and permanent connections?",
        answer: "Yes, we provide both temporary builder's supplies to power your construction activities and permanent electrical connections for the completed properties. This ensures you have reliable power at every stage of your development."
      },
      {
        question: "Do you coordinate with other utility providers?",
        answer: "Absolutely. We work closely with other utility providers (water, gas, telecommunications) to minimise disruption and avoid costly conflicts. Our experienced project managers handle this coordination to ensure efficient installation of all services."
      },
      {
        question: "Are your electrical installations future-proofed for EV charging?",
        answer: "Yes, all our new housing electrical infrastructure designs account for the growing demand for EV charging points. We ensure sufficient capacity and appropriate infrastructure is in place to accommodate future installation of domestic EV charging points."
      },
      {
        question: "What's involved in connecting a high-rise residential building?",
        answer: "High-rise residential connections require specialised design and implementation, including services distribution systems, transformer installations, and emergency power planning. We provide comprehensive solutions that balance safety, efficiency, and cost-effectiveness."
      }
    ],
    commercial: [
      {
        question: "What commercial sectors do you provide connections for?",
        answer: "We provide electrical connections for all commercial sectors, including retail parks, office spaces, hotels, leisure facilities, and mixed-use developments."
      },
      {
        question: "Can you help with power upgrades for existing commercial properties?",
        answer: "Yes, we specialise in power upgrades for existing commercial properties, helping businesses meet increased demand without disrupting operations."
      },
      {
        question: "Do you provide maintenance services after installation?",
        answer: "We offer maintenance packages to ensure your electrical connection infrastructure remains in optimal condition. Our maintenance services can be tailored to your specific requirements."
      }
    ],
    "ev-charging": [
      {
        question: "What types of EV charging solutions do you offer?",
        answer: "We offer a full range of EV charging solutions, from domestic installations to large-scale commercial networks. This includes slow, fast, and rapid charging options to suit different requirements."
      },
      {
        question: "How many charging points can be installed at one location?",
        answer: "The number of charging points depends on various factors including available space, local grid capacity, and power requirements. Our design team will assess your site and provide recommendations based on your specific needs and constraints."
      },
      {
        question: "Can you integrate EV charging with renewable energy sources?",
        answer: "Yes, we design EV charging infrastructure that can integrate with renewable energy sources such as solar panels and battery storage systems. This approach can reduce operational costs and environmental impact."
      }
    ],
    substation: [
      {
        question: "What types of substations do you install?",
        answer: "We design and install various types of substations including package substations, indoor substations, and customised solutions. Each is tailored to the specific requirements of your site and electrical needs."
      },
      {
        question: "How much space is required for a substation?",
        answer: "Space requirements vary depending on the type and capacity of the substation. A typical package substation might require around 4m x 4m, but we work with you to find space-efficient solutions that meet your power needs."
      },
      {
        question: "What's the typical timeframe for substation installation?",
        answer: "Timeframes vary based on complexity, but a typical substation installation project takes 8-12 weeks from design approval to energisation. This includes design, manufacturing, civil works, installation, and commissioning."
      },
      {
        question: "Who is responsible for substation maintenance after installation?",
        answer: "Maintenance responsibilities depend on the adoption arrangement. If the substation is adopted by the DNO, they typically handle maintenance. For privately owned substations, we offer maintenance contracts to ensure continued safe and efficient operation."
      }
    ]
  };

  // Set the active category based on URL parameter
  useEffect(() => {
    if (categoryParam && Object.keys(faqs).includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  // Initialize and filter FAQs based on active category and search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredFaqs(faqs[activeCategory as keyof typeof faqs]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = faqs[activeCategory as keyof typeof faqs].filter(
      (faq) => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
    );
    
    setFilteredFaqs(results);
  }, [searchQuery, activeCategory]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0f5f96] to-[#137DC5] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h1>
            <p className="text-lg mb-0 text-white">
              Find answers to common questions about our electrical connection services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-lg mx-auto">
                <input
                  type="text"
                  placeholder="Search questions or answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#137DC5]"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Category Navigation */}
            <div className="mb-8 overflow-x-auto hide-scrollbar">
              <div className="flex space-x-2 md:justify-center pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setSearchQuery("");
                    }}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                      activeCategory === category.id
                        ? "bg-[#137DC5] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Accordions */}
            <div className="space-y-6">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div key={index} className="bg-[#137DC5] rounded-lg shadow-md overflow-hidden">
                    <details className="group">
                      <summary className="p-6 flex justify-between items-center cursor-pointer">
                        <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                        <span className="text-white group-open:rotate-180 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-8 pt-4 bg-white">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </details>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className="text-gray-500">Try adjusting your search or category selection</p>
                </div>
              )}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 bg-[#f5f5f5] rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Couldn't find what you were looking for?</h2>
              <p className="text-gray-600 mb-6">
                Our team is ready to answer any specific questions you may have about our services.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-[#137DC5] hover:bg-[#0f5f96] text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add utility styles for mobile scrolling */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
} 