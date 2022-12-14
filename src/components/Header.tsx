import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaBlog } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { failedUser, getUser, loggedOutUser } from '../redux/slices/userSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<boolean>();

  const location = useLocation();

  const logOutHandler = () => {
    dispatch(loggedOutUser());
    localStorage.removeItem('tokenCMC');
    localStorage.removeItem('userEmailCMC');
    navigate('/');
  };

  useEffect(() => {
    localStorage.getItem('userEmailCMC') ? setEmail(true) : setEmail(false);

    checkUser();
  }, [location]);

  const checkUser = async () => {
    const token = localStorage.getItem('tokenCMC');

    if (token) {
      axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
    }

    await axios
      .get('https://cmc-remake.herokuapp.com/api/auth/user')
      .then(({ data }) => {
        dispatch(getUser(data));
      })
      .catch(({ response }) =>
        dispatch(failedUser(response.data.errors[0].msg))
      );
  };

  return (
    <div className='p-3 lg:px-8 flex items-center w-full justify-between fixed top-0 bg-header_bg backdrop-blur-[3px] z-20 text-[#fff] tracking-wide'>
      <Link to='/'>
        <h1 className='text-lg font-bold uppercase'>
          check my code - a Premium blog
        </h1>
      </Link>
      <div className='flex items-center space-x-4'>
        {email && (
          <p
            onClick={logOutHandler}
            className='cursor-pointer bg-[#ff4d4d] hover:bg-[#fff] hover:text-[#ff4d4d] px-2 py-0.5 rounded-sm duration-200'
          >
            Logout
          </p>
        )}
        <FaBlog className='cursor-pointer h-5 w-5' />
      </div>
    </div>
  );
};

export default Header;
