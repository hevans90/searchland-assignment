import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'SearchLand Assignment',
  description: 'Created by Harrison Evans',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'h-screen bg-gray-200 font-sans antialiased',
          fontSans.variable,
        )}
      >
        <main className="flex flex-col items-center justify-center h-full w-full">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
