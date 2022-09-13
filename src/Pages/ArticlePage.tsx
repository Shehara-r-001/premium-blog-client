import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentBox from '../components/CommentBox';
import Rightbar from '../components/Rightbar';

const ArticlePage = () => {
  const [article, setArticle] = useState<Article>();
  const params = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      await axios
        .get(`http://localhost:3333/api/articles/find/${params.id}`)
        .then((res) => {
          setArticle(res.data);
        })
        .catch((error) => console.log(error));
    };
    fetchArticle();
  }, []);

  return (
    <div className='pt-20 bg-[#000] text-[#fff] h-[100vh] w-[100vw] overflow-y-scroll scrollbar-none md:flex md:justify-between md:px-10'>
      <div className='w-4/5 mx-auto md:w-2/3 md:m-0 md:pl-10 mb-5'>
        <div className='flex items-center justify-between mb-2'>
          <h1 className='text-lg font-semibold'>{article?.title}</h1>
          <p
            className={`text-sm border p-1 px-2 rounded-md ${
              article?.access === 'Basic'
                ? 'border-[#00ffff]'
                : article?.access === 'Standard'
                ? 'border-[#0000ff]'
                : 'border-[#9900cc]'
            }`}
          >
            {article?.access.split('', 100)}
          </p>
        </div>
        <img src={article?.imgUrl} alt='' className='object-cover' />
        <p className='mt-3 text-sm text-justify'>
          {article?.desc.split('\n', 100)}
        </p>
        <CommentBox articleID={article?._id} />
      </div>

      <Rightbar access={article?.access} />
    </div>
  );
};

export default ArticlePage;
