import React from 'react';
import Suggestion from './Suggestion';

type Props = {
  articles: Article[] | undefined;
};

const Suggestions = ({ articles }: Props) => {
  return (
    <div className='hidden md:flex fixed top-[200px] right-[20px] md:w-1/4 border border-[#008ae6] rounded-md p-3 md:flex-col'>
      <h1 className='font-semibold mb-3'>Suggestions..</h1>
      <div className='flex flex-col items-start'>
        {articles?.slice(0, 7).map((article) => (
          <Suggestion key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
