import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property Pulse | Find The Perfect Rental',
  description: 'Find your next rental property with Property Pulse.',
  keywords: 'rental, property, find, search, app',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>;
      </body>
    </html>
  );
};

export default MainLayout;
