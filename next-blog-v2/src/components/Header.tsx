import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Avatar } from '@nextui-org/avatar';
import { auth } from '@/lib/auth';
import React from 'react';

const Header = async () => {
  const session = await auth();

  let authContent: React.ReactNode;
  if (session?.user) {
    authContent = <Avatar src={session.user.image || ''} />;
  } else {
    authContent = (
      <>
        <NavbarItem>
          <Button type="submit" color="secondary" variant="bordered">
            Sign in
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button type="submit" color="primary" variant="flat">
            Sign up
          </Button>
        </NavbarItem>
      </>
    );
  }

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
      <NavbarContent justify="end">{authContent}</NavbarContent>
    </Navbar>
  );
};

export default Header;
