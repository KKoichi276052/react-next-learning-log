'use server';

import * as auth from '@/lib/auth';

export const signOut = async () => {
  return auth.signOut();
};
