import React from 'react';
import { useAppSelector } from '../redux/hooks';

type Props = {
  access: string | undefined;
};

const Rightbar = ({ access }: Props) => {
  const user = useAppSelector((state) => state.user.data.email);
  return (
    <div className='border border-[#008ae6] w-4/5 mx-auto md:w-1/4 md:h-[100px] p-3 flex items-start justify-center flex-col rounded-lg md:fixed md:top-20 md:right-5'>
      <div className='text-base flex flex-wrap items-center justify-between w-full'>
        <h1 className=''>Signed In as</h1>
        <h1 className='font-semibold text-[#008ae6] truncate'>{user}</h1>
      </div>
      <div className='text-base flex flex-wrap items-center justify-between w-full'>
        <h1>Subscription Type</h1>
        <h1
          className={`font-semibold ${
            access === 'Basic'
              ? 'text-[#00ffff]'
              : access === 'Standard'
              ? 'text-[#0000ff]'
              : 'text-[#9900cc]'
          }`}
        >
          {access}
        </h1>
      </div>
    </div>
  );
};

export default Rightbar;
