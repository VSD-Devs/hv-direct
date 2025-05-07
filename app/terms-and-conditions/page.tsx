"use client";

import React from "react";
import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-14 md:py-16 bg-cover bg-center text-white" style={{ 
        backgroundImage: "linear-gradient(to right, rgba(15, 95, 150, 0.9), rgba(15, 95, 150, 0.8))"
      }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Terms and Conditions
            </h1>
            <p className="text-base md:text-xl mb-3">
              The agreement between you and HV Direct
            </p>
            <p className="text-sm md:text-base text-white/80">
              Last updated: {new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Introduction</h2>
              <p className="mb-6 text-gray-700">
                Welcome to HV Direct. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website or using our services, we assume you accept these terms and conditions in full. Do not continue to use HV Direct's website or services if you do not accept all of the terms and conditions stated on this page.
              </p>
              
              <div className="bg-[#f5f5f5] p-6 rounded-lg mb-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">Key Points</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#137DC5]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">These terms create a legally binding agreement between you and HV Direct.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#137DC5]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">By using our website or services, you agree to be bound by these terms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#137DC5]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">We may update these terms from time to time.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Definitions</h2>
              <p className="mb-4 text-gray-700">
                In these Terms and Conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>"HV Direct", "we", "us", or "our" refers to HV Direct Ltd.</li>
                <li>"You" or "your" refers to the person accessing this website and services.</li>
                <li>"Website" refers to the HV Direct website at www.hvdirect.co.uk.</li>
                <li>"Services" refers to the electrical connection services we provide.</li>
                <li>"Content" refers to all information, text, images, data, or other materials included on our website.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Use of Website</h2>
              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">License to Use</h3>
                <p className="mb-4 text-gray-700">
                  Unless otherwise stated, HV Direct and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
                </p>
                <p className="mb-6 text-gray-700">
                  You must not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Republish material from this website</li>
                  <li>Sell, rent, or sub-license material from this website</li>
                  <li>Reproduce, duplicate, or copy material from this website</li>
                  <li>Redistribute content from this website (unless content is specifically made for redistribution)</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">User Accounts</h3>
                <p className="mb-4 text-gray-700">
                  If you create an account on our website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account. We reserve the right to terminate accounts, edit or remove content, and cancel orders at our sole discretion.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Our Services</h2>
              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">Service Descriptions</h3>
                <p className="mb-4 text-gray-700">
                  We provide electrical connection services across the UK, including but not limited to new connections, high-rise residential connections, new build housing connections, EV charging networks, diversions and reinforcements, and substation installation.
                </p>
                <p className="mb-4 text-gray-700">
                  Service descriptions on our website are for informational purposes only. For specific requirements, please contact us directly to discuss your project needs.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">Service Contracts</h3>
                <p className="mb-4 text-gray-700">
                  Any service contract entered into between you and HV Direct will be subject to a separate agreement. These terms and conditions govern the use of our website and are separate from any service contract that may be established.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">Quotes and Pricing</h3>
                <p className="mb-4 text-gray-700">
                  Quotes provided through our website are estimates only and subject to change after a detailed assessment of your requirements. Final pricing will be confirmed in a formal quote and/or service contract.
                </p>
                <p className="mb-4 text-gray-700">
                  We reserve the right to change our prices at any time, but changes will not affect any service contracts already in place unless specifically agreed upon.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Submissions and Enquiries</h2>
              <div className="mb-8">
                <p className="mb-4 text-gray-700">
                  By submitting content, information, or enquiries to us through our website, you grant us a worldwide, royalty-free license to use, reproduce, adapt, publish, and distribute such content for any purpose, commercial or otherwise.
                </p>
                <p className="mb-4 text-gray-700">
                  You represent and warrant that you own or control all rights to the content you submit and that the content does not violate these terms and conditions.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Limitation of Liability</h2>
              <div className="mb-8">
                <p className="mb-4 text-gray-700">
                  In no event shall HV Direct, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this website or our services, whether such liability is under contract, tort, or otherwise, and HV Direct shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website or our services.
                </p>
                <p className="mb-4 text-gray-700">
                  To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Indemnification</h2>
              <div className="mb-8">
                <p className="mb-4 text-gray-700">
                  You hereby indemnify to the fullest extent HV Direct from and against any and all liabilities, costs, demands, causes of action, damages, and expenses (including reasonable legal fees) arising out of or in any way related to your breach of any of the provisions of these terms.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Severability</h2>
              <div className="mb-8">
                <p className="mb-4 text-gray-700">
                  If any provision of these terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Variation of Terms</h2>
              <div className="mb-8">
                <p className="mb-4 text-gray-700">
                  HV Direct is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms regularly to ensure you understand all terms and conditions governing use of this website.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Assignment</h2>
              <div className="mb-8">
                <p className="mb-4 text-gray-700">
                  HV Direct may assign, transfer, and subcontract its rights and/or obligations under these terms without any notification or consent required. However, you shall not assign, transfer, or subcontract any of your rights and/or obligations under these terms.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Entire Agreement</h2>
              <div className="mb-8">
                <p className="mb-4 text-gray-700">
                  These terms constitute the entire agreement between HV Direct and you in relation to your use of this website and supersede all prior agreements and understandings regarding the same.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Governing Law & Jurisdiction</h2>
              <div className="mb-8">
                <p className="mb-4 text-gray-700">
                  These terms will be governed by and interpreted in accordance with the laws of the United Kingdom, and you submit to the non-exclusive jurisdiction of the courts located in the United Kingdom for the resolution of any disputes.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Contact Information</h2>
              <p className="mb-6 text-gray-700">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-[#f5f5f5] p-6 rounded-lg mb-8">
                <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">HV Direct Ltd</h4>
                <p className="text-gray-700 mb-2">123 Business Park, London, SW1A 1AA</p>
                <p className="text-gray-700 mb-2">Email: <a href="mailto:info@hvdirect.co.uk" className="text-[#137DC5] hover:underline">info@hvdirect.co.uk</a></p>
                <p className="text-gray-700">Phone: 0800 123 4567</p>
              </div>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="text-gray-700">
                  For more information about our privacy practices, please see our <Link href="/privacy-policy" className="text-[#137DC5] hover:underline">Privacy Policy</Link> and <Link href="/cookies" className="text-[#137DC5] hover:underline">Cookie Policy</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 text-[#1a1a1a]">Have Questions About Our Terms?</h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-gray-700">
            Our team is here to answer any questions about our terms and conditions.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-[#137DC5] text-white hover:bg-[#0f5f96] transition-colors shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
} 