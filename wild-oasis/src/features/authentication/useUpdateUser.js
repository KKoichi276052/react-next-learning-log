import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateCurrentUser } from '../../services/apiAuth';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success('User successfully Updated');

      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { mutate, isLoading };
}
