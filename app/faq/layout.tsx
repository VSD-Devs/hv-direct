import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frequently Asked Questions | HV Direct",
  description: "Find answers to common questions about electrical connections, services, and solutions provided by HV Direct across the UK.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 