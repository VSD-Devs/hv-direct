import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "EV Charging Network Connections | HV Direct",
  description: "Reliable electrical infrastructure solutions for commercial and residential EV charging networks across the UK.",
};

export default function EVChargingNetworksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 