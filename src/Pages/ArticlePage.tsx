import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const [article, setArticle] = useState<Article>();
  const articleID = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      await axios
        .get(`http://localhost:3333/api/articles/find/${articleID.id}`)
        .then((res) => {
          setArticle(res.data);
        })
        .catch((error) => console.log(error));
    };
    fetchArticle();
  }, []);

  return (
    <div className='pt-20 bg-[#000] text-[#fff] h-[100vh] w-[100vw] overflow-y-scroll scrollbar-none'>
      <h1>{article?.title}</h1>
      <img src={article?.imgUrl} alt='' className='' />
      <p>{article?.desc}</p>
    </div>
  );
};

export default ArticlePage;
