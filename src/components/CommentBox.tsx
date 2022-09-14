import axios from 'axios';
import React, { useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import Comments from './Comments';

type Props = {
  articleID: string | undefined;
};

const CommentBox = ({ articleID }: Props) => {
  const [comment, setComment] = useState<string>();
  const user = useAppSelector((state) => state.user.data);
  console.log(user);

  const postComment = async (e: any) => {
    e.preventDefault();

    await axios
      .post('http://localhost:3333/api/comments', {
        userID: user.id,
        articleID,
        desc: comment,
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className='border-t border-[#737373] my-10'>
      <form className='flex items-center justify-between space-x-2'>
        <input
          type='text'
          placeholder={`Comment as ${user.email.split('@')[0]}..`}
          onChange={(e) => setComment(e.target.value)}
          className='bg-[rgb(64,64,64)] text-sm p-1 px-3 w-full mt-5 rounded-sm outline-none flex-1'
        />
        <button
          onClick={postComment}
          className='border border-[#008ae6] mt-5 px-3 rounded-sm hover:bg-[#008ae6] hover:text-[#fff] duration-200'
        >
          post
        </button>
      </form>
      <Comments />
    </div>
  );
};

export default CommentBox;
