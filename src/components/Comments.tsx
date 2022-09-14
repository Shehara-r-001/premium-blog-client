import React from 'react';
import Comment from './Comment';

type Props = {
  comments: Comment[] | undefined;
};

const Comments = ({ comments }: Props) => {
  return (
    <div className='border-t border-[#737373] mt-5'>
      {comments?.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
