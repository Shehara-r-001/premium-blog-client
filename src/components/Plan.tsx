import axios from 'axios';
import React from 'react';

type Props = {
  plan: Plan;
};

const Plan = ({ plan }: Props) => {
  const createSession = async (priceID: string) => {
    await axios
      .post('http://localhost:3333/api/subs/session', {
        priceID,
      })
      .then(({ data }) => {
        window.location.href = data.url;
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='h-[50vh] w-[50vw] border-2 border-[#00e600] rounded-md mt-[100px] ml-[25vw] mb-5 backdrop-blur-md overflow-hidden group cursor-pointer md:w-[20vw] md:ml-0 md:mt-0 '>
      <h1 className='text-center uppercase h-1/5 flex items-center justify-center text-[#00e600] font-semibold text-xl'>
        {plan.nickname}
      </h1>
      <div className='flex items-center flex-col justify-center h-3/5'>
        <h1 className='text-4xl tracking-wide text-[#00e600] font-semibold'>
          {plan.unit_amount / 100}
        </h1>
        <p className='uppercase text-2xl text-[#66ff66]'>{plan.currency}</p>
        <p className='text-xl capitalize text-[#ff1a1a] font-semibold'>
          / {plan.recurring.interval}
        </p>
        <p className='mt-2'>
          {plan.unit_amount / 250000 + 1} articles per week
        </p>
      </div>
      <button
        className='bg-[#00e600] px-3 py-1 rounded-sm hover:bg-[#fff] hover:text-[#00e600] duration-200 cursor-pointer -translate-x-[120px] group-hover:translate-x-[calc(25vw-50px)] w-[100px] md:group-hover:translate-x-[calc(10vw-50px)]'
        onClick={() => createSession(plan.id)}
      >
        Subscribe
      </button>
    </div>
  );
};

export default Plan;
