import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useSelector, useDispatch } from 'react-redux';
import './Mem.css';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function Mem({ title, upvotes, downvotes, img, onUpvote, onDownvote, value}) {
    const dispatch = useDispatch();
    // const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);


    return (
        <div className="mem">
            <Box
                sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                        dispatch({ type: "CHANGE_USERNAME", payload: e.target.value });
                        // setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
            </Box>
            <h3>{title}</h3>
            <img src={img} alt={title} className="mem-image" />
            <div className="mem-voites">
                <button className="mem-button-voite" onClick={onUpvote}>👍 {upvotes}</button>
                <button className="mem-button-voite" onClick={onDownvote}>👎 {downvotes}</button>
            </div>
        </div>
    );
}