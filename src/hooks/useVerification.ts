import axios from 'axios';
import { useAppDispatch } from '../redux/hooks';
import { failedUser, getUser } from '../redux/slices/userSlice';

export const useVerification = async () => {
  const dispatch = useAppDispatch();
  let isVerified: boolean;

  const token = localStorage.getItem('tokenCMC');

  if (token) {
    axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
  }

  await axios
    .get('http://localhost:3333/api/auth/user')
    .then(({ data }) => {
      dispatch(getUser(data));
      return (isVerified = true);
    })
    .catch(({ response }) => {
      dispatch(failedUser(response.data.errors[0].msg));
      return (isVerified = false);
    });

  // return isVerified
};
