import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Comment = () => {
  return (
    <div className='flex items-center space-x-3 my-3'>
      <FaUserCircle className='h-6 w-6' />
      <div className='flex-1 text-sm'>
        <h1>Name of the user</h1>
        <p className='text-[#ccc]'>Comment</p>
      </div>
    </div>
  );
};

export default Comment;
