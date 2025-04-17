import './globals.css';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const nunitoSans = Nunito_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  title: 'HV Direct - Expert Utility Connections',
  description: 'Professional high-voltage connections and infrastructure solutions across the nation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} font-sans`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}