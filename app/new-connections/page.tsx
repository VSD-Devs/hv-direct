"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectToSectors() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/sectors#connection-services");
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
      <div className="text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-2">Redirecting...</h1>
        <p className="text-gray-600">Taking you to our updated Sectors page.</p>
      </div>
    </div>
  );
} 