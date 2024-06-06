import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mem from '../Mem/Mem';

export default function Regular() {
  const memes = useSelector((state) =>
    state.memes.filter((mem) => mem.upvotes - mem.downvotes <= 5)
  );
  const dispatch = useDispatch();

  const handleUpvote = (id) => {
    dispatch({ type: 'UPVOTE', payload: id });
  };

  const handleDownvote = (id) => {
    dispatch({ type: 'DOWNVOTE', payload: id });
  };

  return (
    <div>
      {memes.map((mem) => (
        <Mem
          key={mem.id}
          {...mem}
          onUpvote={() => handleUpvote(mem.id)}
          onDownvote={() => handleDownvote(mem.id)}
        />
      ))}
    </div>
  );
}
