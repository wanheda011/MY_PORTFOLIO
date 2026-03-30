import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ajaykumar Solanki | Full Stack Developer & Lecturer',
  description:
    'Portfolio of Ajaykumar Solanki - Full Stack Developer with expertise in modern web technologies, cloud-native applications, and AI-driven solutions.',
  keywords: [
    'Full Stack Developer',
    'Web Developer',
    'React',
    'Node.js',
    'Next.js',
    'Lecturer',
    'Vadodara',
  ],
  authors: [{ name: 'Ajaykumar Solanki' }],
  creator: 'Ajaykumar Solanki',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ajaykumar-portfolio.com',
    siteName: 'Ajaykumar Solanki Portfolio',
    title: 'Ajaykumar Solanki | Full Stack Developer & Lecturer',
    description:
      'Portfolio showcasing full stack development projects, experience, and expertise in modern web technologies.',
    images: [
      {
        url: 'https://ajaykumar-portfolio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ajaykumar Solanki Portfolio',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0e27" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-dark-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
