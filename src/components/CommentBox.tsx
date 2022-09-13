import axios from 'axios';
import React, { useState } from 'react';
import { useAppSelector } from '../redux/hooks';

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
      <form>
        <input
          type='text'
          placeholder={`Comment as ${user.email.split('@')[0]}..`}
          onChange={(e) => setComment(e.target.value)}
          className='bg-[#404040] text-sm p-1 px-3 w-full mt-5 rounded-sm outline-none'
        />
        <button onClick={postComment}>post</button>
      </form>
    </div>
  );
};

export default CommentBox;
