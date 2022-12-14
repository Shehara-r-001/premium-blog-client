import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  article: Article;
};

const Suggestion = ({ article }: Props) => {
  return (
    <div className='w-full flex items-center justify-between text-sm leading-6 group cursor-pointer text-[#ccc]'>
      <Link to={`/articles/${article._id}`}>
        <p className='group-hover:translate-x-2 duration-200 group-hover:text-[#fff] transition-all'>
          {article.title}
        </p>
      </Link>
      <p className='text-xs group-hover:text-[#fff] duration-200'>
        {article.access}
      </p>
    </div>
  );
};

export default Suggestion;
