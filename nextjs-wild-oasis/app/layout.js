import Navigation from './_components/Navigation';
import Logo from './_components/Logo';
import '@/app/_styles/globals.css';
import { Josefin_Sans } from 'next/font/google';
import Header from './_components/Header';

const fontJosefin = Josefin_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  // title: 'The Wild Oasis',
  title: {
    template: '%s | The Wild Oasis',
    default: 'The Wild Oasis',
  },
  description: 'A place to relax and enjoy nature',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontJosefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}