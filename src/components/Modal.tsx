import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { modalState } from '../redux/slices/modalSlice';
import ErrorComp from './Error';
import { useNavigate } from 'react-router-dom';
import { failedUser, getUser } from '../redux/slices/userSlice';

const Modal = () => {
  const dispatch = useAppDispatch();
  const signState = useAppSelector((state) => state.sign.value);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<ErrorObject>();

  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios
      .post(
        `https://check-my-code-backend.herokuapp.com/api/auth/${signState.toLowerCase()}`,
        {
          email,
          password,
        }
      )
      .then(({ data }) => {
        const userData: UserData = data;
        localStorage.setItem('tokenCMC', userData.data.token);
        localStorage.setItem('userEmailCMC', userData.data.user.email);
        navigate('/articles');
        dispatch(modalState(false));
        // console.log(data);
      })
      .then(async () => {
        const token = localStorage.getItem('tokenCMC');

        if (token) {
          axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
        }

        await axios
          .get('https://check-my-code-backend.herokuapp.com/api/auth/user')
          .then(({ data }) => {
            dispatch(getUser(data));
            console.log(data);
          })
          .catch(({ response }) =>
            dispatch(failedUser(response.data.errors[0].msg))
          );
      })

      .catch(({ response }) => {
        setErrorMsg(response.data.errors[0]);
      });
  };

  return (
    <div className='w-[300px] h-[200px] fixed top-[calc(50vh-100px)] left-[calc(50vw-150px)] flex items-center justify-center bg-[#0d0d0d] text-[#fff] flex-col'>
      <AiOutlineCloseSquare
        className='h-6 w-6 fixed top-[calc(50vh-90px)] left-[calc(50vw+108px)] cursor-pointer hover:text-[#ff3300] hover:opacity-50 transition-all duration-100'
        onClick={() => dispatch(modalState(false))}
      />

      <form onSubmit={submitHandler} className='space-y-3 mt-4'>
        <div className='flex items-center justify-between space-x-10'>
          <h1>Email</h1>
          <input
            type='text'
            placeholder='Email..'
            onChange={(e) => setEmail(e.target.value)}
            className='inputField'
          />
        </div>
        <div className='flex items-center justify-between space-x-2'>
          <h1>Password</h1>
          <input
            type='password'
            placeholder='Password..'
            className='inputField'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMsg && <ErrorComp errorMsg={errorMsg} />}
        <div className='w-full flex items-center justify-center'>
          <button
            className={`bg-green_bg px-4 py-1 rounded-sm mt-2 flex items-center group disabled:opacity-40 ${
              errorMsg && '-mt-1'
            }`}
            type='submit'
            disabled={!email || !password}
          >
            {signState}
            <BiRightArrowAlt className='h-5 w-5 group-hover:translate-x-2 duration-300' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
