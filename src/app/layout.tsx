import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neighborhood Coffee Shop',
  description: 'A cozy neighborhood coffee shop serving artisanal coffee and pastries',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}