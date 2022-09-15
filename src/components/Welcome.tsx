import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { modalState } from '../redux/slices/modalSlice';
import { signState } from '../redux/slices/signSlice';
// import { loggedOutUser } from '../redux/slices/userSlice';
// import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const dispatch = useAppDispatch();
  // const userState = useAppSelector((state) => state.user.data);
  // const navigate = useNavigate();
  // const [isUser, setIsUser] = useState<boolean>();
  // const location = useLocation();

  const signInHandler = () => {
    dispatch(modalState(true));
    dispatch(signState('SignIn'));
  };
  const signUpHandler = () => {
    dispatch(modalState(true));
    dispatch(signState('SignUp'));
  };

  // const logOutHandler = () => {
  //   dispatch(loggedOutUser());
  //   localStorage.removeItem('tokenCMC');
  //   localStorage.removeItem('userEmailCMC');
  //   setIsUser(false);
  //   navigate('/');
  // };

  // useEffect(() => {
  //   if (
  //     userState.email === '' ||
  //     localStorage.getItem('userEmailCMC') === null
  //   ) {
  //     setIsUser(false);
  //   } else {
  //     setIsUser(true);
  //   }
  // }, []);

  // localStorage.getItem('userEmailCMC') ? setIsUser(true) : setIsUser(false);

  return (
    <div className='bg-blue_bg w-[300px] h-[300px] flex flex-col items-center justify-center px-3 text-[#fff] backdrop-blur-md rounded-md'>
      <h1 className='font-semibold text-3xl uppercase tracking-wide'>
        be in sync with future of programming..
      </h1>
      <p className='text-justify my-3'>
        Want to improve coding? Want to find out new techniques, Tools? Give it
        a try. Let's just start from here..
      </p>
      {/* {!isUser ? ( */}
      <div className='flex items-center justify-between w-2/3 mt-4'>
        <button onClick={signInHandler} className='btn-sign'>
          SignIn
        </button>
        <button onClick={signUpHandler} className='btn-sign'>
          SignUp
        </button>
      </div>
      {/* ) : ( */}
      {/* <div className='w-full'>
          <div className='flex items-center space-x-1 text-sm'>
            <h1>Welcome back </h1>
            <p>{userState.email}..</p>
          </div>
          <div className='flex items-center space-x-2'>
            <p
              onClick={() => navigate('/articles')}
              className='cursor-pointer bg-[#fff] hover:bg-[#1d64cf] hover:text-[#fff] text-[#1d64cf] py-0.5 rounded-sm duration-200 w-[140px] text-sm text-center'
            >
              Start Reading
            </p>
            <p
              onClick={logOutHandler}
              className='cursor-pointer bg-[#fff] hover:bg-[#ff4d4d] hover:text-[#fff] text-[#ff4d4d] py-0.5 rounded-sm duration-200 w-[80px] text-sm text-center'
            >
              Not me
            </p>
          </div>
        </div> */}
      {/* )} */}
      {/* </div> */}
    </div>
  );
};

export default Welcome;
