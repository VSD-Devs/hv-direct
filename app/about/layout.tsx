import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | HV Direct - Electrical Connection Providers",
  description: "Learn about HV Direct, our team, values and journey to becoming a leading Independent Connection Provider for electrical infrastructure in the UK.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 