import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | HV Direct - Electrical Connection Providers",
  description: "Get in touch with HV Direct for all your electrical connection needs. Request a quote, find our office locations or ask us a question about our services.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 