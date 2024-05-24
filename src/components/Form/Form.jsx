import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import './Form.css';

export default function Form() {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [success, setSuccess] = useState(false);
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
                value: 2,
            },
        });
        setTitle('');
        setImg('');
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000); 
    };

    return (
        <div className="form-container">
            <h2>Dodaj nowego mema</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Tytuł mema:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="img">Mem URL:</label>
                    <input
                        type="text"
                        id="img"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        required
                    />
                </div>
                {success && <h2 className="success-message">Mem został dodany do bazy!</h2>} 
                <Button variant="contained" type="submit">Dodaj</Button>
            </form>
        </div>
    );
}
