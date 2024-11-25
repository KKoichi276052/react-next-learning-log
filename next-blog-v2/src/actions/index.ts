'use server';

import * as auth from '@/lib/auth';

export const signIn = async () => {
  return auth.signIn('github');
};

export const signOut = async () => {
  return auth.signOut();
};
