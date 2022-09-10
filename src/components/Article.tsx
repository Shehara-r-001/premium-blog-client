import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  article: Article;
};

const Article = ({ article }: Props) => {
  return (
    <div className='h-[50vh] w-[50vw] md:w-[20vw] bg-[#000] text-[#fff] rounded-md mt-[80px] shadow-shadow01'>
      <h1 className='p-1 py-2.5 text-center'>{article.title}</h1>
      <div className='w-full'>
        <img
          src={article.imgUrl}
          alt=''
          className=' w-full h-[22vh] object-cover'
        />
      </div>
      <p className='text-xs px-2 py-3 text-justify'>
        {article.desc.substring(0, 150)}...
      </p>
      <Link to={`/articles/${article._id}`}>
        <button className=' text-xs bg-[#fff] text-[#000] rounded-sm py-0.5 hover:bg-[#000] hover:text-[#fff] cursor-pointer duration-200 mt-2 w-[82px] text-center ml-[calc(50vw-100px)] md:ml-[calc(20vw-100px)]'>
          Read more..
        </button>
      </Link>
    </div>
  );
};

export default Article;
