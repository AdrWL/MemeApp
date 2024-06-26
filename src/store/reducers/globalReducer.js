import { v4 as uuidv4 } from 'uuid';

const initialState = {
  memes: [
    {
      id: uuidv4(),
      title: 'Wróbel sąsiada',
      upvotes: 6,
      downvotes: 0,
      img: 'images/memes/image1.webp',
      value: 2,
    },
    {
      id: uuidv4(),
      title: 'Budowlańcy',
      upvotes: 1,
      downvotes: 2,
      img: 'images/memes/image2.webp',
      value: 2,
    },
    {
      id: uuidv4(),
      title: 'Za co $?',
      upvotes: 6,
      downvotes: 0,
      img: 'images/memes/image3.webp',
      value: 2,
    },
    {
      id: uuidv4(),
      title: 'Yoda',
      upvotes: 6,
      downvotes: 0,
      img: 'images/memes/image4.webp',
      value: 2,
    },
  ],
};

export const memeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPVOTE': {
      const index = state.memes.findIndex(
        (mem) => mem.id === action.payload
      );
      if (index === -1) return state;

      const newMemes = [...state.memes];
      newMemes[index] = {
        ...newMemes[index],
        upvotes: newMemes[index].upvotes + 1,
      };
      return {
        ...state,
        memes: newMemes,
      };
    }
    case 'DOWNVOTE': {
      const index = state.memes.findIndex(
        (mem) => mem.id === action.payload
      );
      if (index === -1) return state;

      const newMemes = [...state.memes];
      newMemes[index] = {
        ...newMemes[index],
        downvotes: newMemes[index].downvotes + 1,
      };
      return {
        ...state,
        memes: newMemes,
      };
    }
    case 'CHANGE_RATING': {
      const index = state.memes.findIndex(
        (mem) => mem.id === action.payload.id
      );
      if (index === -1) return state;

      const newMemes = [...state.memes];
      newMemes[index] = {
        ...newMemes[index],
        value: action.payload.value,
      };
      return {
        ...state,
        memes: newMemes,
      };
    }
    case 'ADD_MEME': {
      const newMeme = { ...action.payload, id: uuidv4() };
      return {
        ...state,
        memes: [...state.memes, newMeme],
      };
    }
    default:
      return state;
  }
};
