import React from 'react';
import Suggestion from './Suggestion';

type Props = {
  articles: Article[] | undefined;
};

const Suggestions = ({ articles }: Props) => {
  return (
    <div className='hidden md:flex fixed top-[180px] right-[20px] md:w-1/4 border border-[#008ae6] rounded-md p-3 md:flex-col shadow-shadow02 transition-all duration-200'>
      <h1 className='font-semibold mb-3'>Want to check more..?</h1>
      <div className='flex flex-col items-start'>
        {articles?.slice(0, 7).map((article) => (
          <Suggestion key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
