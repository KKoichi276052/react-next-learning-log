import { describe, it, expect, beforeEach, vi as jest } from 'vitest';
import { createRoot } from 'react-dom/client';
import HeaderAuth from './HeaderAuth';
import { useSession } from 'next-auth/react';

// Mock next-auth useSession hook
jest.mock('next-auth/react');

describe('HeaderAuth', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('shows loading state', () => {
    (useSession as ReturnType<typeof jest.fn>).mockReturnValue({
      status: 'loading',
      data: null,
    });

    const root = createRoot(container);
    root.render(<HeaderAuth />);

    const img = container.querySelector('img');
    expect(img).toBeTruthy();
  });

  it('shows sign in/up buttons when not authenticated', () => {
    (useSession as jest.Mock).mockReturnValue({
      status: 'unauthenticated',
      data: null,
    });

    const root = createRoot(container);
    root.render(<HeaderAuth />);

    const buttons = container.querySelectorAll('button');
    expect(buttons[0].textContent).toBe('Sign in');
    expect(buttons[1].textContent).toBe('Sign up');
  });

  it('shows avatar and sign out when authenticated', () => {
    (useSession as jest.Mock).mockReturnValue({
      status: 'authenticated',
      data: {
        user: {
          image: 'test.jpg',
        },
      },
    });

    const root = createRoot(container);
    root.render(<HeaderAuth />);

    const img = container.querySelector('img');
    expect(img?.getAttribute('src')).toBe('test.jpg');

    const signOutButton = container.querySelector('button');
    expect(signOutButton?.textContent).toBe('Sign out');
  });
});
