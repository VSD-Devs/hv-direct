import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Electrical Connection Services | HV Direct",
  description: "HV Direct provides comprehensive electrical connection services for residential, commercial, industrial, and EV charging markets across the UK.",
};

export default function NewConnectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 