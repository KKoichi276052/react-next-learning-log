import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/navbar';
import { Input } from '@nextui-org/input';
import HeaderAuth from './HeaderAuth';

const Header = () => {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="text-2xl font-bold">
          Next Blog
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Input />
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
