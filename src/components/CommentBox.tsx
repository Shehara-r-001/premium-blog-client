import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import Comments from './Comments';

type Props = {
  articleID: string | undefined;
};

const CommentBox = ({ articleID }: Props) => {
  const [comment, setComment] = useState<string>();
  const [comments, setComments] = useState<Comment[]>();
  const user = useAppSelector((state) => state.user.data);
  // console.log(user);
  const params = useParams();
  const commentRef = useRef(null);
  const [refresh, setRefresh] = useState(false);

  const postComment = async (e: any) => {
    e.preventDefault();

    await axios
      .post('http://localhost:3333/api/comments', {
        userID: user.id,
        articleID,
        desc: comment,
      })
      .then((_res) => {
        // console.log(res.data);
        //@ts-ignore
        commentRef.current.value = '';
        setRefresh(!refresh);
      })

      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const fetchComments = async () => {
      await axios
        .get(`http://localhost:3333/api/comments/${params.id}`)
        .then((res) => {
          setComments(res.data);
        })
        .catch((error) => console.log(error));
    };
    fetchComments();
  }, [params.id, refresh]);

  return (
    <div className='border-t border-[#737373] my-10 md:pb-10'>
      <form className='flex items-center justify-between space-x-2'>
        <input
          type='text'
          placeholder={`Comment as ${user.email.split('@')[0]}..`}
          onChange={(e) => setComment(e.target.value)}
          ref={commentRef}
          id='inputField'
          className='bg-[rgb(64,64,64)] text-sm p-1 px-3 w-full mt-5 rounded-sm outline-none flex-1'
        />
        <button
          onClick={postComment}
          disabled={!comment}
          className='border border-[#008ae6] text-[#008ae6] font-semibold mt-5 px-3 rounded-sm hover:bg-[#008ae6] hover:text-[#fff] duration-200 disabled:opacity-50'
        >
          post
        </button>
      </form>
      <Comments comments={comments} />
    </div>
  );
};

export default CommentBox;
