"use client";

import React from "react";
import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-14 md:py-16 bg-cover bg-center text-white" style={{ 
        backgroundImage: "linear-gradient(to right, rgba(15, 95, 150, 0.9), rgba(15, 95, 150, 0.8))"
      }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Cookie Policy
            </h1>
            <p className="text-base md:text-xl mb-3">
              How we use cookies and similar technologies on our website
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
                This Cookie Policy explains how HV Direct ("we", "us", or "our") uses cookies and similar technologies when you visit our website at <Link href="/" className="text-[#137DC5] hover:underline">www.hvdirect.co.uk</Link> (the "website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              
              <div className="bg-[#f5f5f5] p-6 rounded-lg mb-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">In Brief</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#137DC5]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Cookies are small text files placed on your device when you visit a website.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#137DC5]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">We use cookies to improve your browsing experience, analyse site traffic, and personalise content.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#137DC5]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">You can control cookies through your browser settings and our consent management tool.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">What Are Cookies?</h2>
              <p className="mb-6 text-gray-700">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to recognise your device and remember if you've been to the website before. Cookies are a very common web technology; most websites use cookies and have done so for years.
              </p>
              <p className="mb-6 text-gray-700">
                Cookies are widely used to make websites work more efficiently, as well as to provide information to the owners of the site. They're used for many different purposes, such as helping you navigate between pages efficiently, remembering your preferences, and generally improving your experience when using a website.
              </p>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Types of Cookies We Use</h2>
              <p className="mb-6 text-gray-700">
                We use different types of cookies on our website:
              </p>

              <div className="space-y-8 mb-8">
                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">Essential Cookies</h4>
                  <p className="text-gray-700 mb-3">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white mt-4 border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                          <th className="py-2 px-3 border">Name</th>
                          <th className="py-2 px-3 border">Purpose</th>
                          <th className="py-2 px-3 border">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <td className="py-2 px-3 border">session_id</td>
                          <td className="py-2 px-3 border">Maintains your session across the website</td>
                          <td className="py-2 px-3 border">Session</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 border">csrf_token</td>
                          <td className="py-2 px-3 border">Helps protect against Cross-Site Request Forgery attacks</td>
                          <td className="py-2 px-3 border">Session</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">Analytics Cookies</h4>
                  <p className="text-gray-700 mb-3">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white mt-4 border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                          <th className="py-2 px-3 border">Name</th>
                          <th className="py-2 px-3 border">Purpose</th>
                          <th className="py-2 px-3 border">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <td className="py-2 px-3 border">_ga</td>
                          <td className="py-2 px-3 border">Used to distinguish users for Google Analytics</td>
                          <td className="py-2 px-3 border">2 years</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 border">_gid</td>
                          <td className="py-2 px-3 border">Used to distinguish users for Google Analytics</td>
                          <td className="py-2 px-3 border">24 hours</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 border">_gat</td>
                          <td className="py-2 px-3 border">Used to throttle request rate for Google Analytics</td>
                          <td className="py-2 px-3 border">1 minute</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">Functional Cookies</h4>
                  <p className="text-gray-700 mb-3">
                    These cookies enable enhanced functionality and personalisation, such as remembering your preferences and settings. They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white mt-4 border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                          <th className="py-2 px-3 border">Name</th>
                          <th className="py-2 px-3 border">Purpose</th>
                          <th className="py-2 px-3 border">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <td className="py-2 px-3 border">preferences</td>
                          <td className="py-2 px-3 border">Remembers your site preferences</td>
                          <td className="py-2 px-3 border">1 year</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 border">recently_viewed</td>
                          <td className="py-2 px-3 border">Tracks which pages you've recently viewed</td>
                          <td className="py-2 px-3 border">30 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">Marketing Cookies</h4>
                  <p className="text-gray-700 mb-3">
                    These cookies track your browsing habits to enable us to show advertising which is more likely to be of interest to you. These cookies use information about your browsing history to group you with other users who have similar interests.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white mt-4 border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-gray-700 text-left text-sm">
                          <th className="py-2 px-3 border">Name</th>
                          <th className="py-2 px-3 border">Purpose</th>
                          <th className="py-2 px-3 border">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <td className="py-2 px-3 border">_fbp</td>
                          <td className="py-2 px-3 border">Used by Facebook to deliver advertisements</td>
                          <td className="py-2 px-3 border">3 months</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 border">_gcl_au</td>
                          <td className="py-2 px-3 border">Used by Google AdSense for experimenting with advertisement efficiency</td>
                          <td className="py-2 px-3 border">3 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">How to Manage Cookies</h2>
              <p className="mb-4 text-gray-700">
                You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can impact your user experience and parts of our website might no longer be fully accessible.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">Browser Controls</h3>
                <p className="mb-4 text-gray-700">
                  Most browsers automatically accept cookies, but you can adjust your browser settings to decline cookies or be notified when a cookie is being set. Here's how to manage cookies in popular browsers:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies and site data</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                  <li><strong>Opera:</strong> Settings → Advanced → Privacy & security → Site Settings → Cookies</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">Our Cookie Consent Tool</h3>
                <p className="mb-4 text-gray-700">
                  When you first visit our website, you'll see a cookie banner that allows you to accept or decline non-essential cookies. You can change your preferences at any time by clicking the "Cookie Settings" link in the footer of our website.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">Do Not Track</h3>
                <p className="mb-4 text-gray-700">
                  Some browsers have a "Do Not Track" feature that allows you to tell websites that you do not want to have your online activities tracked. At this time, we do not respond to browser "Do Not Track" signals.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Third-Party Cookies</h2>
              <p className="mb-6 text-gray-700">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website. The third-party services we use include:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li><strong>Google Analytics:</strong> For website analytics and performance tracking.</li>
                <li><strong>Google Ads:</strong> For advertising and remarketing.</li>
                <li><strong>Facebook Pixel:</strong> For advertising and conversion tracking.</li>
                <li><strong>LinkedIn:</strong> For advertising and conversion tracking.</li>
              </ul>
              <p className="mb-6 text-gray-700">
                Each of these services may store cookies on your device when you visit our website. You can learn more about how these services use cookies by visiting their respective privacy policies.
              </p>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Cookie Policy Updates</h2>
              <p className="mb-6 text-gray-700">
                We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to check this page periodically for any changes.
              </p>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Contact Us</h2>
              <p className="mb-6 text-gray-700">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <div className="bg-[#f5f5f5] p-6 rounded-lg mb-8">
                <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">HV Direct Ltd</h4>
                <p className="text-gray-700 mb-2">123 Business Park, London, SW1A 1AA</p>
                <p className="text-gray-700 mb-2">Email: <a href="mailto:privacy@hvdirect.co.uk" className="text-[#137DC5] hover:underline">privacy@hvdirect.co.uk</a></p>
                <p className="text-gray-700">Phone: 0800 123 4567</p>
              </div>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="text-gray-700">
                  For more information about our privacy practices, please see our <Link href="/privacy-policy" className="text-[#137DC5] hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 text-[#1a1a1a]">Questions About Our Cookie Usage?</h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-gray-700">
            Our team is here to help with any questions about how we use cookies on our website.
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