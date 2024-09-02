import { useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateSetting } from '../../services/apiSettings';

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success('Settings successfully Updated');

      queryClient.invalidateQueries({
        queryKey: ['settings'],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { mutate, isLoading };
}
