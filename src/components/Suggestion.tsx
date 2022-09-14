import React from 'react';

type Props = {
  article: Article;
};

const Suggestion = ({ article }: Props) => {
  return (
    <div className='w-full flex items-center justify-between text-sm'>
      <p>{article.title}</p>
      <p className='text-xs'>{article.access}</p>
    </div>
  );
};

export default Suggestion;
