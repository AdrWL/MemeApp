import React from 'react';
import './Mem.css';

export default function Mem({ title, upvotes, downvotes, img, onUpvote, onDownvote }) {
    return (
        <div className="mem">
            <h3>{title}</h3>
            <img src={img} alt={title} className="mem-image" />
            <div className="mem-voites">
                <button className="mem-button-voite" onClick={onUpvote}>👍 {upvotes}</button>
                <button className="mem-button-voite" onClick={onDownvote}>👎 {downvotes}</button>
            </div>
        </div>
    );
}