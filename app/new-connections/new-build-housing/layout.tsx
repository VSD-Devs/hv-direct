import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "New Build Housing Electrical Connections | HV Direct",
  description: "Dedicated electrical infrastructure solutions for new housing developments, ensuring reliable power for residential projects of all sizes.",
};

export default function NewBuildHousingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 