import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import './Form.css';

export default function Form() {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_MEME',
            payload: {
                title,
                upvotes: 0,
                downvotes: 0,
                img,
                value: 0,
            },
        });
        setTitle('');
        setImg('');
    };

    return (
        <div className="form-container">
            <h2>Add a New Meme</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="img">Image URL:</label>
                    <input
                        type="text"
                        id="img"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        required
                    />
                </div>
                <Button variant="contained" type="submit">ADD</Button>
            </form>
        </div>
    );
}
