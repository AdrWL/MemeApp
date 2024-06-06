import React from 'react';
import { useSelector } from 'react-redux';
import Mem from '../Mem/Mem';

export default function MemePage({ isHot }) {
  const memes = useSelector((state) =>
    state.memes.filter((mem) =>
      isHot ? mem.upvotes - mem.downvotes > 5 : mem.upvotes - mem.downvotes <= 5
    )
  );

  return (
    <div>
      {memes.map((mem) => (
        <Mem
          key={mem.id}
          {...mem}
        />
      ))}
    </div>
  );
}

