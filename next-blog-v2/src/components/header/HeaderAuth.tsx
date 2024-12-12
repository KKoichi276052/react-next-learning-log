/**
 * HeaderAuth component handles the authentication-related UI elements in the header.
 *
 * @component
 * @description
 * This component displays different content based on the user's authentication state:
 * - Loading state: Shows a fallback avatar
 * - Authenticated state: Shows user's avatar with a popover containing sign out option
 * - Unauthenticated state: Shows sign in and sign up buttons
 *
 * @returns {React.ReactNode} Authentication-related UI elements based on session state
 *
 * @example
 * ```tsx
 * <HeaderAuth />
 * ```
 *
 * @requires next-auth/react
 * @requires @nextui-org/navbar
 * @requires @nextui-org/button
 * @requires @nextui-org/avatar
 * @requires @nextui-org/popover
 */
'use client';

import { NavbarItem } from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { Avatar } from '@nextui-org/avatar';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover';
import * as actions from '@/actions';
import { useSession } from 'next-auth/react';

const HeaderAuth = () => {
  const session = useSession();

  let authContent: React.ReactNode;

  if (session.status === 'loading') {
    authContent = <Avatar showFallback />;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Avatar src={session.data?.user.image || ''} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-2">
            <form action={actions.signOut}>
              <Button type="submit" variant="flat">
                Sign out
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign in
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
};

export default HeaderAuth;
