import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { modalState } from '../redux/slices/modalSlice';
import { signState } from '../redux/slices/signSlice';

const Welcome = () => {
  const dispatch = useAppDispatch();

  const signInHandler = () => {
    dispatch(modalState(true));
    dispatch(signState('SignIn'));
  };
  const signUpHandler = () => {
    dispatch(modalState(true));
    dispatch(signState('SignUp'));
  };
  return (
    <div className='bg-blue_bg w-[300px] h-[300px] flex flex-col items-center justify-center px-3 text-[#fff] backdrop-blur-md rounded-md'>
      <h1 className='font-semibold text-3xl uppercase tracking-wide'>
        be in sync with future of programming..
      </h1>
      <p className='text-justify my-3'>
        Want to improve coding? Want to find out new techniques, Tools? Give it
        a try. Let's just start from here..
      </p>
      <div className='flex items-center justify-between w-2/3 mt-4'>
        <button onClick={signInHandler} className='btn-sign'>
          SignIn
        </button>
        <button onClick={signUpHandler} className='btn-sign'>
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Welcome;
