import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mem from '../Mem/Mem';

export default function Hot() {
    const memes = useSelector(state => state.memes.filter(mem => mem.upvotes - mem.downvotes > 5));
    const dispatch = useDispatch();

    const handleUpvote = (title) => {
        dispatch({ type: 'UPVOTE', payload: title });
    };

    const handleDownvote = (title) => {
        dispatch({ type: 'DOWNVOTE', payload: title });
    };

    return (
        <div>
            {memes.map(mem => (
                <Mem key={mem.title} {...mem} onUpvote={() => handleUpvote(mem.title)} onDownvote={() => handleDownvote(mem.title)} />
            ))}
        </div>
    );
};