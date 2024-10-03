import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      // queryClient.setQueryData(['user'], user.user);
      // navigate('/dashboard', { replace: true });
      toast.success(
        'Successfully signed up. Please verify your email new account from the mail we have sent'
      );
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { signup, isLoading };
}
