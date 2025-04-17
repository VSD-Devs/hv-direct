import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "High-Rise Residential Electrical Connections | HV Direct",
  description: "Reliable and efficient electrical infrastructure solutions for residential tower blocks and apartment complexes across the UK.",
};

export default function HighRiseResidentialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 