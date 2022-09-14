import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  article: Article;
};

const Suggestion = ({ article }: Props) => {
  return (
    <div className='w-full flex items-center justify-between text-sm leading-6'>
      <Link to={`/articles/${article._id}`}>
        <p>{article.title}</p>
      </Link>
      <p className='text-xs'>{article.access}</p>
    </div>
  );
};

export default Suggestion;
