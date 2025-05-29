
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
// import { ContactUsForm } from '@/components/pages/home/ContactUsForm'; // Moved to HomePage
// import { FaqSection } from '@/components/pages/home/FaqSection'; // Moved to HomePage
import { Toaster } from "@/components/ui/toaster";
import { ScrollToTopButton } from '@/components/shared/ScrollToTopButton';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'FlightTicket - Your Journey Starts Here',
    template: '%s | FlightTicket',
  },
  description: 'Find and book your next flight adventure with FlightTicket. Explore top destinations and amazing flight deals.',
  keywords: ['flights', 'travel', 'booking', 'destinations', 'vacation', 'airlines'],
  openGraph: {
    title: 'FlightTicket - Your Journey Starts Here',
    description: 'Find and book your next flight adventure.',
    type: 'website',
    locale: 'en_US',
    url: 'https://your-app-url.com', // Replace with your actual URL
    siteName: 'FlightTicket',
    images: [
      {
        url: 'https://placehold.co/1200x630.png?text=FlightTicket', // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'FlightTicket Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlightTicket - Your Journey Starts Here',
    description: 'Find and book your next flight adventure.',
    // images: ['https://your-app-url.com/og-image.png'], // Replace with your actual URL
    // creator: '@yourtwitterhandle', // Optional: your Twitter handle
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg', // Using SVG for apple touch icon as well
  },
  manifest: '/site.webmanifest', // Example, if you add a webmanifest
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
