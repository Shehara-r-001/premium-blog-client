import React from 'react';
import blog from '../assets/images/coding-bg02.png';
import { useAppSelector } from '../redux/hooks';
import Modal from './Modal';
import Welcome from './Welcome';

const Hero = () => {
  const modalState = useAppSelector((state) => state.modal.value);

  return (
    <div className='fixed top-0'>
      <img
        src={blog}
        alt='blog-welcome'
        className='w-[100vw] h-[100vh] object-cover'
      />
      <div className='fixed top-[calc(50vh-130px)] left-[calc(50vw-150px)] lg:left-[65vw] z-20'>
        <Welcome />
      </div>
      {modalState && (
        <div className='fixed top-0 w-[100vw] h-[100vh] bg-black_bg backdrop-blur-md z-50'>
          <Modal />
        </div>
      )}
    </div>
  );
};

export default Hero;
