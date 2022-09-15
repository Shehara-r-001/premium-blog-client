import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentBox from '../components/CommentBox';
import Rightbar from '../components/Rightbar';
import Suggestions from '../components/Suggestions';
import { BsArrowLeftShort } from 'react-icons/bs';

const ArticlePage = () => {
  const [article, setArticle] = useState<Article>();
  const [articles, setArticles] = useState<any>();
  const params = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      await axios
        .get(`https://cmc-remake.herokuapp.com/api/articles/find/${params.id}`)
        .then((res) => {
          setArticle(res.data);
        })
        .catch((error) => console.log(error));
    };
    fetchArticle();
  }, [params.id]);

  useEffect(() => {
    const fetchArticles = async () => {
      await axios
        .get('https://cmc-remake.herokuapp.com/api/articles')
        .then(({ data }) => {
          setArticles(data);
        })
        .catch((error) => console.log(error));
    };
    fetchArticles();
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
        <img src={article?.imgUrl} alt='' className='object-cover w-full' />
        <p className='mt-3 text-sm text-justify'>
          {article?.desc.split('\n', 100)}
        </p>
        <CommentBox articleID={article?._id} />
      </div>

      <div>
        <Rightbar access={article?.access} />
        <Suggestions articles={articles} />
        <Link to='/articles'>
          <button className='fixed top-[90vh] md:w-[200px] w-[60px] right-[20px] flex items-center border border-[#008ae6] justify-center py-1 group rounded-sm shadow-shadow02 hover:bg-[#008ae6] transition-all duration-200 ease-out backdrop-blur-sm'>
            <BsArrowLeftShort className='h-6 w-6 group-hover:-translate-x-4 duration-200' />
            <p className='font-semibold text-sm hidden md:inline'>
              Back to Articles
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArticlePage;
