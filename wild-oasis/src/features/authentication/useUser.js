import { getCurrentUser } from '../../services/apiAuth';
import { useQuery } from '@tanstack/react-query';

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });
  // const { session, user } = data;
  // console.log(user);

  return { isLoading, user, isAuthenticated: user?.role === 'authenticated' };
}
