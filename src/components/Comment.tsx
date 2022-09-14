import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

type Props = {
  comment: Comment;
};

const Comment = ({ comment }: Props) => {
  const email: string | null = localStorage.getItem('userEmailCMC');
  return (
    <div className='flex items-center space-x-3 my-3'>
      <FaUserCircle className='h-6 w-6' />
      <div className='flex-1 text-sm'>
        <h1>
          {email?.split('@')[0]}{' '}
          <span className='text-xs text-[#ccc]'>({email})</span>
        </h1>
        <p className='text-[#ccc]'>{comment.desc}</p>
      </div>
    </div>
  );
};

export default Comment;
