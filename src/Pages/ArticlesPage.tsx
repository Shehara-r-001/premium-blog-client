import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg03 from '../assets/images/coding-bg03.png';
import Article from '../components/Article';
import { useAppDispatch } from '../redux/hooks';
import { failedUser, getUser } from '../redux/slices/userSlice';

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const [articles, setArticles] = useState<Article[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('tokenCMC');

      if (token) {
        axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
      }

      await axios
        .get('https://check-my-code-backend.herokuapp.com/api/auth/user')
        .then(({ data }) => {
          dispatch(getUser(data));
          // console.log(data);
        })
        .then(async () => {})
        .catch(({ response }) =>
          dispatch(failedUser(response.data.errors[0].msg))
        );
    };
    fetchUser();
  }, [dispatch]);

  useEffect(() => {
    const fetchArticles = async () => {
      const token = localStorage.getItem('tokenCMC');

      if (token) {
        axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
      }
      await axios
        .get('https://check-my-code-backend.herokuapp.com/api/articles')
        .then(({ data }) => {
          setArticles(data);
        })
        .catch((error) => console.log(error));
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <img src={bg03} alt='bg03' className='h-[100vh] w-[100vw] object-cover' />
      <div className='fixed top-0 h-[100vh] w-[100vw] z-10 flex items-center flex-col md:grid md:grid-cols-3 space-y-5 md:space-y-0 overflow-y-scroll scrollbar-none md:px-[10vw] pb-[20px]'>
        {articles?.length === 0 ? (
          <div className='mt-[50vh] w-[200px] h-[100px] flex flex-col justify-center items-center space-y-3 fixed top-0 left-[calc(50vw-100px)] z-20'>
            <p className='text-[#fff] text-sm text-center'>
              Subscribe to get the access to the content
            </p>
            <button
              className='text-[#fff] w-[80px] h-[30px] bg-[#0000ff] px-3 py-1 text-sm text-center rounded-md hover:bg-[#fff] hover:text-[#0000ff] duration-200 font-semibold'
              onClick={() => navigate('/plans')}
            >
              Plans
            </button>
          </div>
        ) : (
          articles?.map((article) => (
            <div key={article._id}>
              <Article article={article} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ArticlesPage;
