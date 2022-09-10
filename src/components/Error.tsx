import React from 'react';

type Props = {
  errorMsg: ErrorObject;
};

const ErrorComp = ({ errorMsg }: Props) => {
  return (
    <div>
      <h1 className='text-sm text-[#ff0000] font-semibold'>{errorMsg.msg}</h1>
    </div>
  );
};

export default ErrorComp;
